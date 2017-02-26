# Typescript lib starter

[![Build Status](https://travis-ci.org/Hotell/typescript-lib-starter.svg?branch=master)](https://travis-ci.org/Hotell/typescript-lib-starter)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)


> based on https://github.com/elboman/typescript-lib-example and http://marcobotto.com/compiling-and-bundling-typescript-libraries-with-webpack/

- proper package.json file references for build
- compiles esm-lib to vanilla es2015 instead just es2015 modules
- compiles types to `typings` folder instead of multiple distribution
- umd is shiped under `umd` folder instead of `_bundles`

## Consumption of published library:

library is shiped in 3 formats:

- raw es2015 module and code format ( ideal for tree shaking with Webpack 2 )
- CommonJS format for bundler consumption
- UMD format for usage withou bundler

### Webpack

```ts
// main.ts
import {Greeter} from 'my-lib';

const mountPoint = document.getElementById('app');
const App = () => {
  const greeter = new Greeter('Stranger');
  return `<h1>${greeter.greet()}</h1>`
}
const render = (Root: Function, where: HTMLElement) => {
  where.innerHTML = Root();
}

render(App, mountPoint);
```

```html
<html>
  <head>
    <script src="bundle.js" async></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

### UMD ( no bundler )

```html
<html>
  <head>
    <script src="node_modules/my-lib/umd/my-lib.min.js"></script>
    <script async>
        var Greeter = MyLib.Greeter;

        var App = function() {
          var greeter = new Greeter('Stranger');
          return '<h1>'+greeter.greet()+'</h1>'
        }
        var render = function(Root, where) {
          where.innerHTML = Root();
        }

        render(App, mountPoint);
    </script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

## Release

`yarn release`

## Format and fix lint errors

`yarn ts:style:fix`

## Commit ( via commitizen )

`yarn commit`
