const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 8080;

const onError = (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port or stop the conflicting process.`);
    process.exit(1); // Exit with an error code
  } else {
    console.error(`Server failed to start:`, err);
    process.exit(1);
  }
};

server.on('error', onError);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});