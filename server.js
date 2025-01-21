const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);
const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//The above code will run into the problem if the port 8080 is already occupied by another process.