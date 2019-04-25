function getRandom(min, max) {
  var Range = max - min;
  var Rand = Math.random();
  return (min + Math.round(Rand * Range));
}

function getTime() {
  return new Date().getTime();
}

export {getRandom, getTime}