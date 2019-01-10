<p align="center">
  <img src="https://user-images.githubusercontent.com/1223799/50992071-73562500-1516-11e9-99fa-9f73b0f0eee2.png" width="597" alt="{library-name}">
</p>

# TypeScript lib starter

[![Greenkeeper badge](https://badges.greenkeeper.io/Hotell/typescript-lib-starter.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/Hotell/typescript-lib-starter.svg?branch=master)](https://travis-ci.org/Hotell/typescript-lib-starter)
[![NPM version](https://img.shields.io/npm/v/%40martin_hotell%2Ftypescript-lib-starter.svg)](https://www.npmjs.com/package/@martin_hotell/typescript-lib-starter)
![Downloads](https://img.shields.io/npm/dm/@martin_hotell/typescript-lib-starter.svg)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## ✨ Features

- creates package for both Node and Browser
- build will creates 4 standard "package" formats:
  - `umd` 👉 UMD bundle for Node and Browser
    > `main` field in package.json
  - `esm5` 👉 transpiled files to ES5 + es2015 modules for tree shaking
    > `module` field in package.json
  - `esm2015` 👉 raw javascript files transpiled from typescript to latest ES standard ( es2018 )
    > `es2015` field in package.json
    >
    > this is useful if you wanna transpile everything or just wanna ship untranspiled esNext code for evergreen browsers)
  - `fesm` 👉 experimental bundle type introduced by Angular team (TL;DR: it's an es2015 flattened bundle, like UMD but with latest ECMAscript and JS modules)
- type definitions are automatically generated and shipped with your package
  - > `types` field in package.json
- `sideEffects` 👉 [support proper tree-shaking](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free) for whole library ( Webpack >= 4). Turn this off or adjust as needed if your modules are not pure!

## ✌️ start coding in 2 steps

1.  `git clone https://github.com/Hotell/typescript-lib-starter <your-libary-folder-name> && cd $_`

1.  `yarn`

![setting-up-your-library](https://user-images.githubusercontent.com/1223799/49905150-fd09c880-fe6c-11e8-9ad8-425c3a38b1b4.gif)

Yes that's it. Happy coding ! 🖖

## 💉 Consumption of published library:

1.  install it 🤖

```sh
yarn add my-new-library
# OR
npm install my-new-library
```

1.  use it 💪

### Webpack

> #### NOTE:
>
> Don't forget to turn off ES modules transpilation to enable tree-shaking!
>
> - babel: `{"modules": false}`
> - typescript: `{"module": "esnext"}`

```ts
// main.ts or main.js
import { Greeter } from 'my-new-library'

const mountPoint = document.getElementById('app')
const App = () => {
  const greeter = new Greeter('Stranger')
  return `<h1>${greeter.greet()}</h1>`
}
const render = (Root: Function, where: HTMLElement) => {
  where.innerHTML = Root()
}

render(App, mountPoint)
```

```html
<!-- index.htm -->
<html>
  <head>
    <script src="bundle.js" async></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

### UMD/ES2015 module aware browsers (no bundler)

```html
<html>
  <head>
    <script type="module">
      import { Greeter } from './node_modules/my-lib/esm2015/index.js'

      const mountPoint = document.querySelector('#root')

      const App = () => {
        const greeter = new Greeter('Stranger')
        return `<h1>${greeter.greet()}</h1>`
      }

      const render = (Root, where) => {
        where.innerHTML = Root()
      }

      render(App, mountPoint)
    </script>
    <script
      nomodule
      src="node_modules/my-lib/bundles/my-new-library.umd.min.js"
    ></script>
    <script nomodule async>
      var Greeter = MyLib.Greeter

      var mountPoint = document.querySelector('#root')

      var App = function() {
        var greeter = new Greeter('Stranger')
        return '<h1>' + greeter.greet() + '</h1>'
      }

      var render = function(Root, where) {
        where.innerHTML = Root()
      }

      render(App, mountPoint)
    </script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## [👨‍🔧 Technical overview](./.github/CONTRIBUTING.md#technical-overview)

## [💅 Style guides](./.github/CONTRIBUTING.md#-style-guides)

## [🚀 Publishing](./.github/CONTRIBUTING.md#-publishing)

## 🕵️‍♀️ Troubleshooting

#### dynamic `import()`

This starter uses latest **TypeScript >=3.x** which has support for lazy loading chunks/modules via `import()` and also definition acquisition via [`import('../path-to-module').TypeFoo`](http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#import-types)

Before TS 2.9, it wasn't possible to properly generate ambient definitions if you used dynamic `import()`. This works now as expected without any hacks ❤️ !

> #### Before TS 2.9
>
> Please note that if you wanna use that feature, compiler will complain because declaration generation is turned on, and currently TS can't handle type generation with types that will be loaded in the future ( lazily )
>
> **How to solve this:**
>
> - turn of type checking and don't generate types for that lazy import: `import('./components/button') as any`
> - or you can use this [temporary workaround](https://github.com/Microsoft/TypeScript/issues/16603#issuecomment-310208259)

## 🥂 License

[MIT](./LICENSE.md) as always
