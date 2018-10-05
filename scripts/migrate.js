/**
 * Migrate Typescript-library-starter from 3. -> 4.
 */

const JSON5 = require('json5')
const sortObjectByKeyNameList = require('sort-object-keys')
const {
  writeFileSync,
  copyFileSync,
  readFileSync,
  existsSync,
  unlinkSync,
} = require('fs')
const { resolve, join } = require('path')
const starterPkg = require('../package.json')
const args = process.argv.slice(2)
const pathToProject = args[0]

if (!pathToProject) {
  console.log(`
  Usage:

  Your pwd should be typescript-lib-starter github project:
  "$ pwd 👉  ~/projects/typescript=lib-starter"

  Now you can execute:

  "$ node scripts/migrate.js ../my-projects/my-existing-package"
  `)

  throw new Error(
    'you need provide relative path to package that uses ts-lib-starter!'
  )
}

const ROOT = resolve(__dirname, '..')
const PACKAGE_ROOT = resolve(ROOT, pathToProject)

main()

function main() {
  if (!existsSync(PACKAGE_ROOT)) {
    throw new Error(`${PACKAGE_ROOT}, doesn't exists`)
  }

  console.log('Migration initialized 👀')

  console.log('path to Package:', PACKAGE_ROOT)

  updatePackageJson()
  updateTsConfig()
  updateTsLintConfig()
  updateConfigDir()
  updateScriptsDir()
  updatePrettierIgnore()

  console.log('DONE ✅')
}

function updatePackageJson() {
  const libPackagePkgPath = resolve(PACKAGE_ROOT, 'package.json')

  /**
   * @type {typeof starterPkg}
   */
  const libPackagePkg = JSON5.parse(
    readFileSync(libPackagePkgPath, { encoding: 'utf-8' })
  )

  /**
   * @type {typeof starterPkg}
   */
  const updatePkg = {
    ...libPackagePkg,
    main: starterPkg.main,
    engines: { ...libPackagePkg.engines, ...starterPkg.engines },
    scripts: { ...libPackagePkg.scripts, ...starterPkg.scripts },
    config: {
      ...starterPkg.config,
    },
    husky: {
      ...starterPkg.husky,
    },
    peerDependencies: sortObjectByKeyNameList({
      ...libPackagePkg.peerDependencies,
      ...starterPkg.peerDependencies,
    }),
    devDependencies: sortObjectByKeyNameList({
      ...starterPkg.devDependencies,
      ...libPackagePkg.devDependencies,
    }),
  }

  removePackages(updatePkg.devDependencies)
  writePackage(updatePkg)

  /**
   *
   * @param {{[packageName:string]:string}} devDependencies
   */
  function removePackages(devDependencies) {
    const depsToRemove = [
      '@types/uglifyjs-webpack-plugin',
      '@types/webpack',
      'uglifyjs-webpack-plugin',
      'webpack',
      'webpack-cli',
      // packages needed for this script
      'json5',
      '@types/json5',
      'sort-object-keys',
    ]

    depsToRemove.forEach(
      (dependencyName) => delete devDependencies[dependencyName]
    )
  }

  /**
   * @param {typeof starterPkg} pkg
   */
  function writePackage(pkg) {
    const updatedLibPkgToWrite = JSON.stringify(pkg, null, 2)
    writeFileSync(join(PACKAGE_ROOT, 'package.json'), updatedLibPkgToWrite)

    console.log('\n updated package.json:', updatedLibPkgToWrite, '\n')
  }
}

function updateTsConfig() {
  /**
   * @typedef {typeof import('../tsconfig.json')} TsConfig
   */

  const starterConfigPath = resolve(ROOT, 'tsconfig.json')
  const libPackageConfigPath = resolve(PACKAGE_ROOT, 'tsconfig.json')

  /**
   * @type {TsConfig}
   */
  const starterConfig = JSON5.parse(
    readFileSync(starterConfigPath, { encoding: 'utf-8' })
  )

  /**
   * @type {TsConfig}
   */
  const libConfig = JSON5.parse(
    readFileSync(libPackageConfigPath, { encoding: 'utf-8' })
  )

  console.log('starter:', starterConfig)
  console.log('library:', libConfig)

  console.log('==TS-Config:nothing updated==\n')
}

function updateTsLintConfig() {
  /**
   * @typedef {typeof import('../tslint.json')} TsLintConfig
   */

  const starterConfigPath = resolve(ROOT, 'tslint.json')
  const libPackageConfigPath = resolve(PACKAGE_ROOT, 'tslint.json')

  /**
   * @type {TsLintConfig}
   */
  const starterConfig = JSON5.parse(
    readFileSync(starterConfigPath, { encoding: 'utf-8' })
  )

  /**
   * @type {TsLintConfig}
   */
  const libConfig = JSON5.parse(
    readFileSync(libPackageConfigPath, { encoding: 'utf-8' })
  )

  console.log('starter:', starterConfig)
  console.log('library:', libConfig)

  console.log('==TS-Lint:nothing updated==\n')
}

function updateConfigDir() {
  const starterConfigPathDir = resolve(ROOT, 'config')
  const libPackageConfigPathDir = resolve(PACKAGE_ROOT, 'config')

  const filesToCopy = [
    'commitlint.config.js',
    'global.d.ts',
    'helpers.js',
    'rollup.config.js',
    'tsconfig.json',
    'types.js',
  ]
  const filesToRemove = ['webpack.config.js']

  filesToCopy.forEach((file) => {
    copyFileSync(
      resolve(starterConfigPathDir, file),
      join(libPackageConfigPathDir, file)
    )
  })

  filesToRemove.forEach((file) => {
    unlinkSync(join(libPackageConfigPathDir, file))
  })

  console.log('==config/ updated==\n')
}

function updateScriptsDir() {
  const starterScriptsPathDir = resolve(ROOT, 'scripts')
  const libPackageScriptsPathDir = resolve(PACKAGE_ROOT, 'scripts')

  const filesToCopy = ['copy.js', 'tsconfig.json']
  /**
   * @type {string[]}
   */
  const filesToRemove = []

  filesToCopy.forEach((file) => {
    copyFileSync(
      resolve(starterScriptsPathDir, file),
      join(libPackageScriptsPathDir, file)
    )
  })

  filesToRemove.forEach((file) => {
    unlinkSync(join(libPackageScriptsPathDir, file))
  })

  console.log('==scripts/ updated==\n')
}

function updatePrettierIgnore() {
  const starterPrettierIgnorePath = resolve(ROOT, '.prettierignore')
  const libPackagePrettierIgnorePath = resolve(PACKAGE_ROOT, '.prettierignore')

  copyFileSync(starterPrettierIgnorePath, libPackagePrettierIgnorePath)

  console.log('==.prettierignore updated==\n')
}
