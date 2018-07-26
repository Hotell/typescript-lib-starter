declare module 'jest-config' {
  const defaults: jest.DefaultOptions
}

type RollupPluginFn<O extends object = {}> = (
  options?: O
) => import('rollup').Plugin

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

declare module 'webpack-config-utils' {
  namespace WebpackConfigUtils {
    type RemoveEmpty = <T extends object | any[]>(input: T) => T
    type GetIfUtils = (env: object | string, vars?: any[]) => IfUtils
    type PropIf = <A, I, E>(add: A, value: I, alternate: E) => I | E
    type PropIfNot = PropIf
    // type IfUtilsFn = <Y, N>(value?: Y, alternate?: N) => Y | N
    interface IfUtilsFn {
      <Y, N>(value: Y, alternate?: N): Y | N
      (): boolean
    }
    interface IfUtils {
      ifDevelopment: IfUtilsFn
      ifNotDevelopment: IfUtilsFn
      ifDev: IfUtilsFn
      ifNotDev: IfUtilsFn
      ifProduction: IfUtilsFn
      ifNotProduction: IfUtilsFn
      ifProd: IfUtilsFn
      ifNotProd: IfUtilsFn
      ifTest: IfUtilsFn
      ifNotTest: IfUtilsFn
    }
  }

  export const getIfUtils: WebpackConfigUtils.GetIfUtils
  export const removeEmpty: WebpackConfigUtils.RemoveEmpty
}
