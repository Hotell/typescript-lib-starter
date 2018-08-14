# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="4.0.0"></a>

# [4.0.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v3.0.0...v4.0.0) (2018-08-14)

### Bug Fixes

- **npm-scripts:** copy updated files after build>standard-version during release ([7146b15](https://www.github.com/Hotell/typescript-lib-starter/commit/7146b15))
- **ts:** remove test files from exclude field ([da65fa0](https://www.github.com/Hotell/typescript-lib-starter/commit/da65fa0))

### Features

- **build:** add rollup ([0674dea](https://www.github.com/Hotell/typescript-lib-starter/commit/0674dea))
- **build:** ditch webpack and use rollup for bundling ([0326a0e](https://www.github.com/Hotell/typescript-lib-starter/commit/0326a0e))
- **scripts:** provide migration script from v3 to v4 ([c6c5b75](https://www.github.com/Hotell/typescript-lib-starter/commit/c6c5b75))

### BREAKING CHANGES

- **build:** Webpack is not used anymore for bundling. Long live Rollup !

<a name="3.0.0"></a>

# [3.0.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v2.0.0...v3.0.0) (2018-07-23)

### Bug Fixes

- **build:** don't compile test files ([221c277](https://www.github.com/Hotell/typescript-lib-starter/commit/221c277))
- **build:** remove ts from peer dependencies ([3ef99d4](https://www.github.com/Hotell/typescript-lib-starter/commit/3ef99d4))
- **config:** improve externals config type ([dd4026e](https://www.github.com/Hotell/typescript-lib-starter/commit/dd4026e))

### Features

- add default License as MIT ([5711237](https://www.github.com/Hotell/typescript-lib-starter/commit/5711237))
- **build:** build package files to dist/ (#70) ([cc5cb78](https://www.github.com/Hotell/typescript-lib-starter/commit/cc5cb78))
- **test:** add setup-tests file for jest ([6c4a822](https://www.github.com/Hotell/typescript-lib-starter/commit/6c4a822))

### BREAKING CHANGES

- **build:** **Before:**

when releasing a package all distribution files were produced on root of the project which clobers working tree and makes you constatnly update gitignore and npmignore and cleanup npm script if you wanna change anything. That was rather cumbersome.

**After:**
Now package files are created and moved to dist/ folder with tweaked package.json which removes all unnecessary metadata information and keeps only what is important for cunsumer ( author infor, git repo, dependencies and peerDependencies ).

During release npm script will 'cd dist' and from there it executes npm publish.

<a name="2.0.0"></a>

# [2.0.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.7.0...v2.0.0) (2018-07-16)

### Bug Fixes

- **lint:** remove rules clashing with prettier ([40e1116](https://www.github.com/Hotell/typescript-lib-starter/commit/40e1116))
- **precommit:** properly call prettier ([9d14f0f](https://www.github.com/Hotell/typescript-lib-starter/commit/9d14f0f))

### Features

- revamp whole starter and make it up to date (#46) ([2b8e74f](https://www.github.com/Hotell/typescript-lib-starter/commit/2b8e74f))
- **test:** add jest-typeahead ([6659ff6](https://www.github.com/Hotell/typescript-lib-starter/commit/6659ff6))
- **tsc:** enable esnext modules for import() support ([d0261c4](https://www.github.com/Hotell/typescript-lib-starter/commit/d0261c4))
- **vscode:** add vscode settings nad recommendet plugins ([0f5fc80](https://www.github.com/Hotell/typescript-lib-starter/commit/0f5fc80))

### BREAKING CHANGES

- Before all tooling config used to be in root, now it's within config/ folder which
  is typecheked and provides intellisense -> better DX. With this all npm-script tasks are provided
  with --config flag to resolve it properly.

<a name="1.7.0"></a>

# [1.7.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.6.0...v1.7.0) (2017-06-17)

### Bug Fixes

- **build:** correctly setup uglify options ([6c0f4b2](https://www.github.com/Hotell/typescript-lib-starter/commit/6c0f4b2))
- **npm-scripts:** use proper npm variable for targeting main path in 'size' command ([7fc44b1](https://www.github.com/Hotell/typescript-lib-starter/commit/7fc44b1))
- **ts-lint:** add tslint-config-prettier so tslint doesn't clash with prettier ([10a8524](https://www.github.com/Hotell/typescript-lib-starter/commit/10a8524))

### Features

- **build:** add environment aware builds with env helpers ([cd87599](https://www.github.com/Hotell/typescript-lib-starter/commit/cd87599))
- **build:** update to webpack 3 with scope hoisting + enable experimental flat esm bundle (#3) ([baa63ba](https://www.github.com/Hotell/typescript-lib-starter/commit/baa63ba)), closes [#2](https://www.github.com/Hotell/typescript-lib-starter/issues/2)
- **npm-scripts:** run only tests for affected files in prepush and exit immediately if some tests f ([d4316b4](https://www.github.com/Hotell/typescript-lib-starter/commit/d4316b4))
- **ts-lint:** provide nice error output ([c66b4f7](https://www.github.com/Hotell/typescript-lib-starter/commit/c66b4f7))

<a name="1.6.0"></a>

# [1.6.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.5.0...v1.6.0) (2017-06-04)

### Bug Fixes

- **npm-scripts:** typo in pre release script name ([8f5fae4](https://www.github.com/Hotell/typescript-lib-starter/commit/8f5fae4))

### Features

- **build:** use 3 new standard formats for shipping libraries ([fdd413e](https://www.github.com/Hotell/typescript-lib-starter/commit/fdd413e))

<a name="1.5.0"></a>

# [1.5.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.4.0...v1.5.0) (2017-06-04)

### Bug Fixes

- **build:** allow first-release command ([10294c5](https://www.github.com/Hotell/typescript-lib-starter/commit/10294c5))
- always set strict versions via npm or yarn ([eee2150](https://www.github.com/Hotell/typescript-lib-starter/commit/eee2150))
- remove dot files from gitignore ([e292c53](https://www.github.com/Hotell/typescript-lib-starter/commit/e292c53))
- **npm-scripts:** rename commit to cz so husky wont run precommit twice ([248a570](https://www.github.com/Hotell/typescript-lib-starter/commit/248a570))

### Features

- migrate to prettier and bump deps ([999043e](https://www.github.com/Hotell/typescript-lib-starter/commit/999043e))

<a name="1.4.0"></a>

# [1.4.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.3.0...v1.4.0) (2017-03-27)

### Bug Fixes

- add \*.log to gitignore/npmignore ([502ab00](https://www.github.com/Hotell/typescript-lib-starter/commit/502ab00))
- make tests work on windows ([5650754](https://www.github.com/Hotell/typescript-lib-starter/commit/5650754))
- normalize umd bundle name after scope addition ([73ab65f](https://www.github.com/Hotell/typescript-lib-starter/commit/73ab65f))

### Features

- add docs generation via typedoc ([b59f2b6](https://www.github.com/Hotell/typescript-lib-starter/commit/b59f2b6))
- add strong type checking ([860e500](https://www.github.com/Hotell/typescript-lib-starter/commit/860e500))

<a name="1.3.0"></a>

# [1.3.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.2.0...v1.3.0) (2017-03-15)

### Features

- **scripts:** add ability to use --first-release on release script ([c94694a](https://www.github.com/Hotell/typescript-lib-starter/commit/c94694a))
- **scripts:** add size script to get gzipped build size for umd bundle ([d25138a](https://www.github.com/Hotell/typescript-lib-starter/commit/d25138a))
- add unit testing and coverage support via jest ([0551a52](https://www.github.com/Hotell/typescript-lib-starter/commit/0551a52))

<a name="1.2.0"></a>

# [1.2.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.1.1...v1.2.0) (2017-02-27)

### Features

- **scripts:** add preflight check what files will be published ([71a615b](https://www.github.com/Hotell/typescript-lib-starter/commit/71a615b))
- **webpack:** determine the name library name for umd build from package json ([8d970bd](https://www.github.com/Hotell/typescript-lib-starter/commit/8d970bd))

<a name="1.1.1"></a>

## [1.1.1](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.1.0...v1.1.1) (2017-02-27)

### Bug Fixes

- add back npm publish to release script ([378d582](https://www.github.com/Hotell/typescript-lib-starter/commit/378d582))

<a name="1.1.0"></a>

# [1.1.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.0.1...v1.1.0) (2017-02-27)

### Features

- **lint:** add ordered-imports rule ([d6d0eff](https://www.github.com/Hotell/typescript-lib-starter/commit/d6d0eff))

<a name="1.0.1"></a>

## [1.0.1](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.0.0...v1.0.1) (2017-02-27)

### Bug Fixes

- **build:** fix release script task ([49ca3ba](https://www.github.com/Hotell/typescript-lib-starter/commit/49ca3ba))

<a name="1.0.0"></a>

# 1.0.0 (2017-02-26)
