export {}

// ===== JEST ====

/**
 * @typedef {import('ts-jest/dist/types').TsJestConfig} TsJestConfig
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

// ==== ROLLUP ====
/**
 * @typedef {import('rollup').InputOptions & { output: import('rollup').OutputOptions | Array<import('rollup').OutputOptions | null> }} RollupConfig
 */

/**
 * @typedef {import('rollup').Plugin} RollupPlugin
 */
