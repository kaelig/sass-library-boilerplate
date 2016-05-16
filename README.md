# Sass Project Boilerplate [![Build Status](https://travis-ci.org/kaelig/sass-project-boilerplate.svg?branch=master)](https://travis-ci.org/kaelig/sass-project-boilerplate)

The Sass Project Boilerplate is a set of files that are a good base to publish well documented and tested Sass libraries, micro-frameworks, mixins and functions.

## Quick Start

1. Download or clone this repository (or fork it)
2. Replace all occurrences of "sass-project", "Sass Project", "user/" to your own project and user names, and remove this first part of the README
3. Start coding!
4. Push the code to a different repository

## Features

- Pre-filled README, package.json, sache.json
- [SassDoc](http://sassdoc.com/) configuration, with tasks that publish a beautiful documentation to GitHub Pages
- [Unit tests](https://github.com/kaelig/sass-project-boilerplate/tree/master/test) with examples
- Continuous integration with [Travis](https://travis-ci.org/)
- [`.editorconfig`](http://editorconfig.org/) for consistent whitespace/tabs across files
- [Eyeglass](https://github.com/sass-eyeglass/eyeglass)-enabled

----

<!-- Remove everything above, and edit the  -->

# Sass Project [![Build Status](https://travis-ci.org/user/sass-project.svg?branch=master)](https://travis-ci.org/user/sass-project)

`project()` is a Sass mixin that helps doing something.

Short description.

Why the tool was built (optional).

## Getting started

Very simple piece of code showing the most basic usage of `project()`.

```scss
$project-default-message: 'foo';
@import 'path/to/project/index.scss';

.foo {
  @include project();
}
```

## Running tests

Clone the repository, then:

```
npm install
npm test
```

## Generating the documentation

Sass Project's API is documented using [SassDoc](http://sassdoc.com/).

```bash
npm run generate-doc
```

Generate & deploy the documentation to <https://user.github.io/sass-project/>:

```bash
# First time deploying the documentation?
npm run deploy-doc-first-time

# Any other time:
npm run deploy-doc
```

## License

Source code is licensed under [BSD License Clause 2](http://opensource.org/licenses/BSD-2-Clause).

## Acknowledgments

Thank you to people who have helped.
