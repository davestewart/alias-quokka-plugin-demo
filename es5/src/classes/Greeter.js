function Greeter (who) {
  this.who = typeof who === 'undefined' ? 'world' : who
}

Greeter.prototype = {
  greet: function () {
    console.log('Hello ' + this.who + ' !')
  }
}

module.exports = Greeter
