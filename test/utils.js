var assert = require('chai').assert;
var sass = require('node-sass');

var render = function(options) {
  options.outputStyle = 'compressed';

  var result = sass.renderSync(options);

  return result && result.css.toString();
}

var renderFile = function(file) {
  return render({ file: file });
}

var renderData = function(data) {
  return render({ data: data });
}

var wrapRender = function(renderFn) {
  return function(arg) {
    var css, err;

    try {
      css = renderFn(arg);
    } catch(e) {
      err = e.message;
    }

    return {
      css: {
        contains: function(str) {
          return assert(css.indexOf(str) !== -1);
        },
      },
      error: {
        contains: function(str) {
          return assert(err.indexOf(str) !== -1);
        },
      },
    };
  }
};

module.exports = {
  file: wrapRender(renderFile),
  string: wrapRender(renderData),
};
