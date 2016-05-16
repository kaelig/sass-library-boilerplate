----

# Sass Project Boilerplate [![Build Status](https://travis-ci.org/kaelig/sass-project.svg?branch=master)](https://travis-ci.org/kaelig/sass-project)

The Sass Project boilerplate contains the elements needed to publish a well tested Sass mixin or function, and make it accessible to npm, Bower, [sache](http://www.sache.in/), and [Eyeglass](https://github.com/sass-eyeglass/eyeglass) users.


## Quick Start

1. Clone / download this repository
2. Replace all occurrences of "sass-project", "Sass Project", "user/" to your own project and user names
3. Start coding!

## Features

- Pre-filled README, package.json, sache.json
- [SassDoc](http://sassdoc.com/) configuration, with tasks that publish a beautiful documentation to GitHub Pages
- Unit tests with examples
- .editorconfig for consistent whitespace/tabs across files
- [Eyeglass](https://github.com/sass-eyeglass/eyeglass)-enabled

----

<!-- Remove everything above -->

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
npm run deploy-doc
```

## License

Source code is licensed under [BSD License Clause 2](http://opensource.org/licenses/BSD-2-Clause).

## Acknowledgments

Thank you to people who have helped.
