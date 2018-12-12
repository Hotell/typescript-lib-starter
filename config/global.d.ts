// ============================
// ts-jest types require 'babel__core'
// ============================
declare module 'babel__core' {
  interface TransformOptions {}
}

// ============================
// Rollup plugins without types
// ============================
type RollupPluginImpl<O extends object = object> = import('rollup').PluginImpl<
  O
>

declare module 'rollup-plugin-json' {
  export interface Options {
    /**
     *  All JSON files will be parsed by default, but you can also specifically include/exclude files
     */
    include?: string | string[]
    exclude?: string | string[]
    /**
     *  for tree-shaking, properties will be declared as variables, using either `var` or `const`
     *  @default false
     */
    preferConst?: boolean
    /**
     * specify indentation for the generated default export — defaults to '\t'
     * @default '\t'
     */
    indent?: string
  }
  const plugin: RollupPluginImpl<Options>
  export default plugin
}
declare module 'rollup-plugin-sourcemaps' {
  const plugin: RollupPluginImpl
  export default plugin
}
declare module 'rollup-plugin-node-resolve' {
  const plugin: RollupPluginImpl
  export default plugin
}
declare module 'rollup-plugin-commonjs' {
  const plugin: RollupPluginImpl
  export default plugin
}
declare module 'rollup-plugin-replace' {
  const plugin: RollupPluginImpl
  export default plugin
}
declare module 'rollup-plugin-uglify' {
  const uglify: RollupPluginImpl
  export { uglify }
}
declare module 'rollup-plugin-terser' {
  const terser: RollupPluginImpl
  export { terser }
}

// =====================
// missing library types
// =====================
declare module '@commitlint/core' {
  interface Config {
    extends: string[]
  }
}
declare module 'sort-object-keys' {
  const sortPackageJson: <T extends {}>(
    object: T,
    sortWith?: (...args: any[]) => any
  ) => T
  export = sortPackageJson
}

declare module 'prompt'
declare module 'replace-in-file' {
  interface Options {
    files: string | string[]
    from: Array<string | RegExp>
    to: string | string[]
    ignore: string | string[]
    dry: boolean
    encoding: string
    disableGlobs: boolean
    allowEmptyPaths: boolean
  }

  interface API {
    (options: Partial<Options>): string[]
    sync(options: Partial<Options>): string[]
  }

  const api: API
  export = api
}
