const { resolve } = require('path');
const webpack = require('webpack');

const packageJSON = require('./package.json');
const packageName = normalizePackageName(packageJSON.name);

const PATHS = {
  entryPoint: resolve(__dirname, 'src/index.ts'),
  bundles: resolve(__dirname, 'umd'),
}

const UMD = {
  libName: pascalCase(packageName),
}

const config = (env) => {

  return {
    // These are the entry point of our library. We tell webpack to use
    // the name we assign later, when creating the bundle. We also use
    // the name to filter the second entry point for applying code
    // minification via UglifyJS
    entry: {
      [packageName]: [PATHS.entryPoint],
      [`${packageName}.min`]: [PATHS.entryPoint]
    },
    // The output defines how and where we want the bundles. The special
    // value `[name]` in `filename` tell Webpack to use the name we defined above.
    // We target a UMD and name it MyLib. When including the bundle in the browser
    // it will be accessible at `window.MyLib`
    output: {
      path: PATHS.bundles,
      filename: '[name].js',
      libraryTarget: 'umd',
      library: UMD.libName,
      umdNamedDefine: true
    },
    // Add resolve for `tsx` and `ts` files, otherwise Webpack would
    // only look for common JavaScript file extension (.js)
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    // Activate source maps for the bundles in order to preserve the original
    // source when the user debugs the application
    devtool: 'source-map',
    plugins: [
      // Apply minification only on the second bundle by
      // using a RegEx on the name, which must end with `.min.js`
      // NB: Remember to activate sourceMaps in UglifyJsPlugin
      // since they are disabled by default!
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        include: /\.min\.js$/,
      }),

      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
    ],
    module: {
      // Webpack doesn't understand TypeScript files and a loader is needed.
      // `node_modules` folder is excluded in order to prevent problems with
      // the library dependencies, as well as `__tests__` folders that
      // contain the tests for the library
      rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            // we don't want any declaration file in the bundles
            // folder since it wouldn't be of any use ans the source
            // map already include everything for debugging

            // This cannot be set because -> Option 'declarationDir' cannot be specified without specifying option 'declaration'.
            // declaration: false,
          }
        }],
      }]
    }
  }
}

module.exports = config;


// helpers

function camelCaseToDash(myStr) {
  return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function dashToCamelCase(myStr) {
  return myStr.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function toUpperCase(myStr) {
  return `${myStr.charAt(0).toUpperCase()}${myStr.substr(1)}`;
}

function pascalCase(myStr) {
  return toUpperCase(dashToCamelCase(myStr));
}

function normalizePackageName(rawPackageName){
  const scopeEnd = rawPackageName.indexOf('/') + 1;

  return rawPackageName.substring(scopeEnd);
}
