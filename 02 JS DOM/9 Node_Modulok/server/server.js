const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');

  // set header content type
  res.setHeader('Content-Type', 'text/html');
  res.write('<h4>Hi there!</h4>');
  res.write('<p>I am your first server.</p>');
  res.write('<p>Smile at me.</p>');
  res.end();});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});

/*const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});*/