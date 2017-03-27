export class Greeter {
  constructor(private greeting: string) { }
  greet() {
    return `Hello, ${this.greeting}!`
  }
}
