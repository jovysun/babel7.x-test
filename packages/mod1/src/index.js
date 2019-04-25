import "@babel/polyfill";
console.log([1,2,3].findIndex(x => x == 4))
console.log('abc'.padStart(10)) //使用babel-polyfill才可以
const alertMe = (msg) => {
  console.log(msg)
}
class Robot {
  constructor (msg) {
    this.message = msg
  }
  say () {
    // console.log(this.message)
    alertMe(this.message)
  }
}

const marvin = new Robot('hello babel')
marvin.say()
