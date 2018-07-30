const { writeFileSync, copyFileSync } = require('fs')
const { resolve } = require('path')
const packageJson = require('../package.json')

main()

function main() {
  const projectRoot = resolve(__dirname, '..')
  const distPath = resolve(projectRoot, 'dist')
  const distPackageJson = createDistPackageJson(packageJson)

  copyFileSync(
    resolve(projectRoot, 'README.md'),
    resolve(distPath, 'README.md')
  )
  copyFileSync(
    resolve(projectRoot, 'CHANGELOG.md'),
    resolve(distPath, 'CHANGELOG.md')
  )
  copyFileSync(
    resolve(projectRoot, 'LICENSE.md'),
    resolve(distPath, 'LICENSE.md')
  )
  copyFileSync(
    resolve(projectRoot, '.npmignore'),
    resolve(distPath, '.npmignore')
  )
  writeFileSync(resolve(distPath, 'package.json'), distPackageJson)
}

/**
 * @param {typeof packageJson} packageConfig
 * @return {string}
 */
function createDistPackageJson(packageConfig) {
  const {
    devDependencies,
    scripts,
    engines,
    config,
    husky,
    'lint-staged': lintStaged,
    ...distPackageJson
  } = packageConfig

  return JSON.stringify(distPackageJson, null, 2)
}
