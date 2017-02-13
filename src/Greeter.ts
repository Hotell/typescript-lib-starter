export class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return `Hello, ${this.greeting}!`;
    }
}