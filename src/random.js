import _ from 'lodash';

export {
  randomText
};

function randomText(n = 100) {
  return _.range(n)
    .map(x => randomLetter())
    .join('');
}

function randomLetter() {
  var charCode = 'a'.charCodeAt(0) + _.random(0, 25);
  return String.fromCharCode(charCode);
}
