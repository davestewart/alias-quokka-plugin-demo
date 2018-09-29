export default class Greeter {

  constructor (who = 'world') {
    this.who = who
  }

  greet () {
    console.log(`Hello ${this.who} !`)
  }

}
