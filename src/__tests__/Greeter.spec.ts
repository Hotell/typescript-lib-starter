import { Greeter } from '../Greeter'

describe(`Greeter`, () => {
  let greeter: Greeter

  beforeEach(() => {
    greeter = new Greeter('World')
  })

  it(`should greet`, () => {
    const actual = greeter.greet()
    const expected = 'Hello, World!'

    expect(actual).toBe(expected)
  })
})
