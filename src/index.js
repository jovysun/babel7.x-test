import {getRandom, getTime} from './util';


function component() {
  var element = document.createElement('div');

  var randomNum = getRandom(10, 100);
  var nowTime = getTime();
  // Lodash, now imported by this script
  element.innerHTML = ['Hello', 'babel7', randomNum, nowTime].join('-');

  return element;
}

document.body.appendChild(component());




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
        alertMe(this.message)
    }
}
const marvin = new Robot('hello babel')
marvin.say()
