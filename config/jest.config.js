// @ts-check

const { defaults } = require('jest-config')

/**
 * @type {import('./types').TsJestConfig}
 */
const tsJestConfig = {
  skipBabel: true,
}

/**
 * @type {Partial<jest.InitialOptions>}
 */
const config = {
  rootDir: '..',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*.)+(spec|test).ts?(x)',
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  globals: {
    'ts-jest': tsJestConfig,
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}

module.exports = config
