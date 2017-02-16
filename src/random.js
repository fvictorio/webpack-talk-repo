import trae from 'trae';

export {
  randomText
};

function randomText() {
  return trae.get('/random').then(res => res.data.word);
}
