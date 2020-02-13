const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((request, response) => {
  const { method, url } = request;

  // const url = request.url;
  // const { url } = request;

  console.log('method', method);

  console.log('url', url);

  if (url === '/hello') {
    const html = fs.readFileSync('./html/index.html');
    response.end(html);
  } else if (url === '/bye') {
    const bye = fs.readFileSync('./html/bye.html');
    response.end(bye);
  } else {
    const notFound = fs.readFileSync('./html/404.html');
    response.statusCode = 404;
    response.end(notFound);
  }
});

// eslint-disable-next-line consistent-return
server.listen(port, error => {
  if (error) {
    return console.log('se espicho!!!');
  }
  console.log('escuchando en puerto 3000!!!');
});
