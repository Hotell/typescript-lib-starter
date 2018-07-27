// ts-jest types require 'babel-core'
declare module 'babel-core' {
  interface TransformOptions {}
}

declare module 'jest-config' {
  const defaults: jest.DefaultOptions
}

type RollupPluginFn<O extends object = {}> = (
  options?: O
) => import('rollup').Plugin

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
  const plugin: RollupPluginFn<Options>
  export default plugin
}
declare module 'rollup-plugin-sourcemaps' {
  const plugin: RollupPluginFn
  export default plugin
}
declare module 'rollup-plugin-node-resolve' {
  const plugin: RollupPluginFn
  export default plugin
}
declare module 'rollup-plugin-commonjs' {
  const plugin: RollupPluginFn
  export default plugin
}
declare module 'rollup-plugin-replace' {
  const plugin: RollupPluginFn
  export default plugin
}
declare module 'rollup-plugin-uglify' {
  const uglify: RollupPluginFn
  export { uglify }
}
declare module 'rollup-plugin-terser' {
  const terser: RollupPluginFn
  export { terser }
}
