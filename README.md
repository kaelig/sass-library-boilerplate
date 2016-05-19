# Sass Library Boilerplate [![Build Status](https://travis-ci.org/kaelig/sass-library-boilerplate.svg?branch=master)](https://travis-ci.org/kaelig/sass-library-boilerplate)

The Sass Library Boilerplate is a set of files that are a good base to publish well documented and tested Sass libraries, micro-frameworks, mixins and functions.

## Quick Start

1. [Download](https://github.com/kaelig/sass-library-boilerplate/archive/master.zip), clone or fork this repository
2. Replace all occurrences of "sass-library", "Sass Library", "user/"… to your own library and user names.
3. Also, remove this first part of the README

## Features

- Pre-filled README, package.json, sache.json
- [SassDoc](http://sassdoc.com/) configuration, with tasks that publish a beautiful documentation to GitHub Pages
- [Unit tests](https://github.com/kaelig/sass-library-boilerplate/tree/master/test) with examples
- Continuous integration with [Travis](https://travis-ci.org/)
- [A changelog](https://github.com/kaelig/sass-library-boilerplate/blob/master/CHANGELOG.md)
- [`.editorconfig`](http://editorconfig.org/) for consistent whitespace/tabs across files
- [Eyeglass](https://github.com/sass-eyeglass/eyeglass)-enabled

----

<!-- Remove everything above, and edit the  -->

# Sass Library [![Build Status](https://travis-ci.org/user/sass-library.svg?branch=master)](https://travis-ci.org/user/sass-library)

`library()` is a Sass mixin that helps doing something.

Short description.

Why the tool was built (optional).

## Getting started

Very simple piece of code showing the most basic usage of `library()`.

```scss
$library-default-message: 'foo';
@import 'path/to/library/index.scss';

.foo {
  @include library();
}
```

## Running tests

Clone the repository, then:

```
npm install
npm test
```

## Generating the documentation

Sass Library's API is documented using [SassDoc](http://sassdoc.com/).

```bash
npm run sassdoc
```

Generate & deploy the documentation to <https://user.github.io/sass-library/>:

```bash
# First time deploying the documentation?
npm run sassdoc-deploy-first-time

# Any other time:
npm run sassdoc-deploy
```

## License

Source code is licensed under [BSD License Clause 2](http://opensource.org/licenses/BSD-2-Clause).

## Acknowledgments

Thank you to people who have helped.
