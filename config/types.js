// @ts-check
export {}

const { defaults } = require('jest-config')

// ==== WEBPACK ====

/**
 * @typedef {import('webpack').Configuration} WebpackConfig
 */

/**
 * @typedef {import('webpack').Rule} WebpackRule
 */
/**
 *
/**
 * @typedef {import('webpack').Plugin} WebpackPlugin
 */

/**
 * @typedef {import('webpack').ExternalsElement} WebpackExternals
 */

/**
 * @typedef {{dev:boolean} | {prod:boolean}} Env
 */

// ===== JEST ====

/**
 * @typedef {import('ts-jest/dist/jest-types').TsJestConfig} TsJestConfig
 */

// @TODO https://github.com/Microsoft/TypeScript/issues/24916
/**
 * @typedef {Partial<jest.ProjectConfig & jest.GlobalConfig>} JestConfig
 */

/**
 * @typedef {typeof import('jest-config').defaults} JestDefaultConfig
 */

// ==== PRETTIER ====
/**
 * @typedef {import('prettier').Options} PrettierConfig
 */
