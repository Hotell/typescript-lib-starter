// @ts-check

const { defaults } = require('jest-config')

/**
 * @type {import('./types').TsJestConfig}
 */
const tsJestConfig = {
  skipBabel: true,
}

/**
 * @type {Partial<jest.ProjectConfig & jest.GlobalConfig>}
 */
const config = {
  rootDir: '..',
  /**
   * @FIXME jest typings are bad, so we need to turn it off -> PR
   * https://github.com/DefinitelyTyped/DefinitelyTyped/pull/26304
   */
  transform: /** @type {any} */ ({
    '^.+\\.(ts|tsx)$': 'ts-jest',
  }),
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*.)+(spec|test).ts?(x)',
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  globals: {
    'ts-jest': tsJestConfig,
  },
  /**
   * @FIXME coverageThreshold is missing from `jest.ProjectConfig` but is within `jest.GlobalConfig` -> PR
   */
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}

module.exports = config
