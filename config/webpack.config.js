// @ts-check
const { resolve } = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')

const packageJSON = require('../package.json')
const packageName = normalizePackageName(packageJSON.name)

/**
 * @typedef {import('webpack').Configuration} WebpackConfig
 */
/**
 * @typedef {import('webpack').Rule} WebpackRule
 */
/**
 * @typedef {import('webpack').Plugin} WebpackPlugin
 */
/**
 * @typedef {import('webpack').ExternalsElement} WebpackExternals
 */
/**
 * @typedef {{dev:boolean} | {prod:boolean}} Env
 */

const LIB_NAME = pascalCase(packageName)
const ROOT = resolve(__dirname, '..')
const DIST = resolve(ROOT, 'dist')
const PATHS = {
  entry: resolve(ROOT, 'src/index.ts'),
  umd: resolve(DIST, 'bundles'),
  fesm: resolve(DIST, 'fesm'),
}

/**
 * @type {Env}
 * https://webpack.js.org/configuration/configuration-types/#exporting-a-function-to-use-env
 * this is equal to 'webpack --env.dev'
 */
const DEFAULT_ENV = { dev: true }

/**
 * @type {WebpackExternals | WebpackExternals[]}
 */
// const EXTERNALS = ['react','react-dom', 'lodash']
const EXTERNALS = {
  // react: 'react'
  // lodash: {
  //   commonjs: 'lodash',
  //   commonjs2: 'lodash',
  //   amd: 'lodash',
  //   root: '_',
  // },
}

/**
 * @type {{[key:string]: WebpackRule}}
 */
const RULES = {
  ts: {
    test: /\.tsx?$/,
    include: /src/,
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          // we don't want any declaration file in the bundles
          // folder since it wouldn't be of any use ans the source
          // map already include everything for debugging
          // This cannot be set because -> Option 'declarationDir' cannot be specified without specifying option 'declaration'.
          // declaration: false,
        },
      },
    ],
  },
  tsNext: {
    test: /\.tsx?$/,
    include: /src/,
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          target: 'es2018',
        },
      },
    ],
  },
}

/**
 *
 * @param {Env} env
 * @returns {[WebpackConfig,WebpackConfig]}
 */
const config = (env = DEFAULT_ENV) => {
  const { ifProd, ifNotProd } = getIfUtils(env)
  /**
   * @type {WebpackConfig['mode']}
   */
  const mode = ifProd('production', 'development')
  /**
   * @type {WebpackPlugin[]}
   */
  const PLUGINS = removeEmpty([
    // Apply minification only on the second bundle by using a RegEx on the name, which must end with `.min.js`
    ifProd(
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
          output: { comments: false },
        },
      })
    ),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: ifProd('"production"', '"development"') },
    }),
  ])

  /**
   * @type {import('./types').WebpackConfig}
   */
  const UMDConfig = {
    // These are the entry point of our library. We tell webpack to use
    // the name we assign later, when creating the bundle. We also use
    // the name to filter the second entry point for applying code
    // minification via UglifyJS
    entry: {
      [ifProd(`${packageName}.min`, packageName)]: [PATHS.entry],
    },
    // The output defines how and where we want the bundles. The special
    // value `[name]` in `filename` tell Webpack to use the name we defined above.
    // We target a UMD and name it MyLib. When including the bundle in the browser
    // it will be accessible at `window.MyLib`
    output: {
      path: PATHS.umd,
      filename: '[name].umd.js',
      libraryTarget: 'umd',
      library: LIB_NAME,
      // libraryExport:  LIB_NAME,
      // will name the AMD module of the UMD build. Otherwise an anonymous define is used.
      umdNamedDefine: true,
    },
    // Add resolve for `tsx` and `ts` files, otherwise Webpack would
    // only look for common JavaScript file extension (.js)
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    // add here all 3rd party libraries that you will use as peerDependncies
    // https://webpack.js.org/guides/author-libraries/#add-externals
    externals: EXTERNALS,
    // Activate source maps for the bundles in order to preserve the original
    // source when the user debugs the application
    devtool: 'source-map',
    mode,
    performance: {
      hints: 'warning',
    },
    stats: 'minimal',
    plugins: PLUGINS,
    module: {
      rules: [RULES.ts],
    },
  }

  /**
   * @type {WebpackConfig}
   */
  const FESMconfig = Object.assign(
    {},
    UMDConfig,
    /**@type {WebpackConfig}*/ ({
      entry: {
        [ifProd('index.min', 'index')]: [PATHS.entry],
      },
      output: {
        path: PATHS.fesm,
        filename: '[name].js',
      },
      module: {
        rules: [RULES.tsNext],
      },
    })
  )

  return [UMDConfig, FESMconfig]
}

module.exports = config

// helpers

/**
 *
 * @param {string} myStr
 */
function camelCaseToDash(myStr) {
  return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 *
 * @param {string} myStr
 */
function dashToCamelCase(myStr) {
  return myStr.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}

/**
 *
 * @param {string} myStr
 */
function toUpperCase(myStr) {
  return `${myStr.charAt(0).toUpperCase()}${myStr.substr(1)}`
}

/**
 *
 * @param {string} myStr
 */
function pascalCase(myStr) {
  return toUpperCase(dashToCamelCase(myStr))
}

/**
 *
 * @param {string} rawPackageName
 */
function normalizePackageName(rawPackageName) {
  const scopeEnd = rawPackageName.indexOf('/') + 1

  return rawPackageName.substring(scopeEnd)
}
