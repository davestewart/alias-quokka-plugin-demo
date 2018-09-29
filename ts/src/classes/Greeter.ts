export default class Greeter {

  who: string

  constructor (who: string = 'world') {
    this.who = who
  }

  greet () {
    console.log(`Hello ${this.who} !`)
  }

}
