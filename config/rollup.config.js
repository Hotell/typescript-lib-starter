// @ts-check
import sourceMaps from 'rollup-plugin-sourcemaps'
import nodeResolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'
import { terser } from 'rollup-plugin-terser'
const { removeEmpty } = require('webpack-config-utils')

import pkg from '../package.json'
const {
  pascalCase,
  normalizePackageName,
  getOutputFileName,
} = require('./helpers')

/**
 * @typedef {import('rollup').InputOptions & { output: import('rollup').OutputOptions | Array<import('rollup').OutputOptions | null> }} Config
 */

/**
 * @typedef {import('rollup').Plugin} RollupPlugin
 */

const env = process.env.NODE_ENV || 'development'
const isProd = env === 'production'

/**
 * @type {string[]}
 */
const external = Object.keys(pkg.peerDependencies)

/**
 *  @type {RollupPlugin[]}
 */
const plugins = /** @type {RollupPlugin[]} */ ([
  // Allow json resolution
  json(),

  // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
  commonjs(),

  // Allow node_modules resolution, so you can use 'external' to control
  // which external modules to include in the bundle
  // https://github.com/rollup/rollup-plugin-node-resolve#usage
  nodeResolve(),

  // Resolve source maps to the original source
  sourceMaps(),

  // properly set process.env.NODE_ENV within `./environment.ts`
  replace({
    exclude: 'node_modules/**',
    'process.env.NODE_ENV': JSON.stringify(env),
  }),
])

/**
 * @type {Config}
 */
const CommonConfig = {
  input: {},
  output: {},
  inlineDynamicImports: true,
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external,
}

/**
 * @type {Config}
 */
const UMDconfig = {
  ...CommonConfig,
  input: 'dist/esm5/index.js',
  output: [
    {
      file: getOutputFileName('dist/bundles/index.umd.js', isProd),
      format: 'umd',
      name: pascalCase(normalizePackageName(pkg.name)),
      sourcemap: true,
    },
  ],
  plugins: /** @type {RollupPlugin[]} */ (removeEmpty([
    ...plugins,
    isProd ? uglify() : void 0,
  ])),
}

/**
 * @type {Config}
 */
const FESMconfig = {
  ...CommonConfig,
  input: 'dist/esm2015/index.js',
  output: [
    {
      file: getOutputFileName('dist/bundles/index.es.js', isProd),
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: /** @type {RollupPlugin[]} */ (removeEmpty([
    ...plugins,
    isProd ? terser() : void 0,
  ])),
}

export default [UMDconfig, FESMconfig]
