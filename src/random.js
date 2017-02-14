export {
  randomText
};

function randomText(n = 100) {
  return [...Array(n)].map(x => randomLetter()).join('');
}

function randomLetter() {
  var charCode = 'a'.charCodeAt(0) + randomNumber(0, 26);
  return String.fromCharCode(charCode);
}

function randomNumber(a, b) {
  return a + Math.floor((b - a) * Math.random());
}
