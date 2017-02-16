const _ = require('lodash');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/random') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    const word = randomText();
    res.write(JSON.stringify({ word }));
  } else {
    res.writeHead(404);
  }
  res.end();
});

server.listen(8000);

function randomText(n = 100) {
  console.info(`Generating ${n} random characters`);
  return _.range(n)
    .map(x => randomLetter())
    .join('');
}

function randomLetter() {
  var charCode = 'a'.charCodeAt(0) + _.random(0, 25);
  return String.fromCharCode(charCode);
}
