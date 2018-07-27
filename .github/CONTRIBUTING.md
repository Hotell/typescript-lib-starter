# Contributing

First of all, thanks for your interest in contributing to the {library-name}! 🎉

PRs are the preferred way to spike ideas and address issues, if you have time. If you plan on contributing frequently, please feel free to ask to become a maintainer; the more the merrier. 🤙

## Technical overview

This library uses following libraries for development:

- [typescript](http://www.typescriptlang.org/) for typed JavaScript and transpilation
- [jest](https://jestjs.io/) for unit testing
  - run `yarn test:watch` during development
- [rollup](https://rollupjs.org/guide/en) for creating UMD bundles
- [yarn](https://yarnpkg.com/lang/en/) for package management
- [npm scripts](https://docs.npmjs.com/misc/scripts) for executing tasks

## Getting started

### Creating a Pull Request

If you've never submitted a Pull request before please visit http://makeapullrequest.com/ to learn everything you need to know.

#### Setup

1.  Fork the repo.
1.  `git clone` your fork.
1.  Make a `git checkout -b branch-name` branch for your change.
1.  Run `yarn install` (make sure you have node and npm installed first)
    Updates

1.  make sure to add unit tests
1.  If there is a `*.spec.ts` file, update it to include a test for your change, if needed. If this file doesn't exist, please create it.
1.  Run `yarn test` or `yarn test:watch` to make sure all tests are working, regardless if a test was added.

### Commit Message Format

We use https://conventionalcommits.org/ message format. you can use `yarn commit` to invoke a CLI tool which will guide you through the process.

## License

By contributing your code to the {library-name} GitHub Repository, you agree to license your contribution under the MIT license.
