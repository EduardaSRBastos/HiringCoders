const http = require('http');
const queryString = require("query-string");
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 
  //new user
  const params = queryString.parse(url.parse(req.url, true).search);
  console.log(params);


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hi Everybody!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});