# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.7.0"></a>
# [1.7.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.6.0...v1.7.0) (2017-06-17)


### Bug Fixes

* **build:** correctly setup uglify options ([6c0f4b2](https://www.github.com/Hotell/typescript-lib-starter/commit/6c0f4b2))
* **npm-scripts:** use proper npm variable for targeting main path in 'size' command ([7fc44b1](https://www.github.com/Hotell/typescript-lib-starter/commit/7fc44b1))
* **ts-lint:** add tslint-config-prettier so tslint doesn't clash with prettier ([10a8524](https://www.github.com/Hotell/typescript-lib-starter/commit/10a8524))


### Features

* **build:** add environment aware builds with env helpers ([cd87599](https://www.github.com/Hotell/typescript-lib-starter/commit/cd87599))
* **build:** update to webpack 3 with scope hoisting + enable experimental flat esm bundle (#3) ([baa63ba](https://www.github.com/Hotell/typescript-lib-starter/commit/baa63ba)), closes [#2](https://www.github.com/Hotell/typescript-lib-starter/issues/2)
* **npm-scripts:** run only tests for affected files in prepush and exit immediately if some tests f ([d4316b4](https://www.github.com/Hotell/typescript-lib-starter/commit/d4316b4))
* **ts-lint:** provide nice error output ([c66b4f7](https://www.github.com/Hotell/typescript-lib-starter/commit/c66b4f7))



<a name="1.6.0"></a>
# [1.6.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.5.0...v1.6.0) (2017-06-04)


### Bug Fixes

* **npm-scripts:** typo in pre release script name ([8f5fae4](https://www.github.com/Hotell/typescript-lib-starter/commit/8f5fae4))


### Features

* **build:** use 3 new standard formats for shipping libraries ([fdd413e](https://www.github.com/Hotell/typescript-lib-starter/commit/fdd413e))



<a name="1.5.0"></a>
# [1.5.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.4.0...v1.5.0) (2017-06-04)


### Bug Fixes

* **build:** allow first-release command ([10294c5](https://www.github.com/Hotell/typescript-lib-starter/commit/10294c5))
* always set strict versions via npm or yarn ([eee2150](https://www.github.com/Hotell/typescript-lib-starter/commit/eee2150))
* remove dot files from gitignore ([e292c53](https://www.github.com/Hotell/typescript-lib-starter/commit/e292c53))
* **npm-scripts:** rename commit to cz so husky wont run precommit twice ([248a570](https://www.github.com/Hotell/typescript-lib-starter/commit/248a570))


### Features

* migrate to prettier and bump deps ([999043e](https://www.github.com/Hotell/typescript-lib-starter/commit/999043e))



<a name="1.4.0"></a>
# [1.4.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.3.0...v1.4.0) (2017-03-27)


### Bug Fixes

* add *.log to gitignore/npmignore ([502ab00](https://www.github.com/Hotell/typescript-lib-starter/commit/502ab00))
* make tests work on windows ([5650754](https://www.github.com/Hotell/typescript-lib-starter/commit/5650754))
* normalize umd bundle name after scope addition ([73ab65f](https://www.github.com/Hotell/typescript-lib-starter/commit/73ab65f))


### Features

* add docs generation via typedoc ([b59f2b6](https://www.github.com/Hotell/typescript-lib-starter/commit/b59f2b6))
* add strong type checking ([860e500](https://www.github.com/Hotell/typescript-lib-starter/commit/860e500))



<a name="1.3.0"></a>
# [1.3.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.2.0...v1.3.0) (2017-03-15)


### Features

* **scripts:** add ability to use --first-release on release script ([c94694a](https://www.github.com/Hotell/typescript-lib-starter/commit/c94694a))
* **scripts:** add size script to get gzipped build size for umd bundle ([d25138a](https://www.github.com/Hotell/typescript-lib-starter/commit/d25138a))
* add unit testing and coverage support via jest ([0551a52](https://www.github.com/Hotell/typescript-lib-starter/commit/0551a52))



<a name="1.2.0"></a>
# [1.2.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.1.1...v1.2.0) (2017-02-27)


### Features

* **scripts:** add preflight check what files will be published ([71a615b](https://www.github.com/Hotell/typescript-lib-starter/commit/71a615b))
* **webpack:** determine the name library name for umd build from package json ([8d970bd](https://www.github.com/Hotell/typescript-lib-starter/commit/8d970bd))



<a name="1.1.1"></a>
## [1.1.1](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.1.0...v1.1.1) (2017-02-27)


### Bug Fixes

* add back npm publish to release script ([378d582](https://www.github.com/Hotell/typescript-lib-starter/commit/378d582))



<a name="1.1.0"></a>
# [1.1.0](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.0.1...v1.1.0) (2017-02-27)


### Features

* **lint:** add ordered-imports rule ([d6d0eff](https://www.github.com/Hotell/typescript-lib-starter/commit/d6d0eff))



<a name="1.0.1"></a>
## [1.0.1](https://www.github.com/Hotell/typescript-lib-starter/compare/v1.0.0...v1.0.1) (2017-02-27)


### Bug Fixes

* **build:** fix release script task ([49ca3ba](https://www.github.com/Hotell/typescript-lib-starter/commit/49ca3ba))



<a name="1.0.0"></a>
# 1.0.0 (2017-02-26)
