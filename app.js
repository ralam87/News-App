const http = require('http');
const routes = require('./routes.js')

const port = 3000;

const server = http.createServer((req, res) => {
  routes.home(req, res)
  routes.feed(req, res)
});

server.listen(port, () => {
  console.log(`Server running at localhost:/${port}/`);
});
