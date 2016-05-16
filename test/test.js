var compile = require('./utils');

describe('Compiling files with syntax errors', function() {
  it('should throw a useful error message', function() {
    compile.file('test/wrong-param-type.scss').error.contains('The parameter passed to project() must be a String.');
  });
});

describe('Calling project()', function() {
  it('should output the default message', function() {
    compile.file('test/test.scss').css.contains('.default{content:"Default message');
  });
});

describe('Passing a message', function() {
  it('should output the message', function() {
    compile.file('test/test.scss').css.contains('.passing-message{content:"passed message');
  });
});

describe('Overriding the default message', function() {
  it('should output the overridden message', function() {
    compile.file('test/test.scss').css.contains('.override{content:"Overridden message');
  });
});
