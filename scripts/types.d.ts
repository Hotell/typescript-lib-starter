type CommonProps = {
  /**
   * this is just name of the library kebab-cased
   */
  libraryName: string
  description: string
  keywords: string[]
  useVSCode: boolean
  username: string
  usermail: string
  githubName: string
}

export type LibConfig = {
  /**
   * if scope is provided this property is the published npm name `@scope/libName`
   */
  packageName: string
  version?: string
} & CommonProps
export type PromptAnswers = {
  useScope: boolean
  scope: string
} & CommonProps
