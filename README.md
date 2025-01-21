# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js applications where the server fails to start because the specified port is already in use.  The `server.js` file contains the buggy code, while `serverSolution.js` provides a robust solution.

## Problem

The `server.js` example attempts to start an HTTP server on port 8080. If another application or process is already using this port, the server will fail to start and may not provide a clear error message.

## Solution

The `serverSolution.js` file demonstrates how to handle this gracefully using asynchronous error handling.  The `server.listen` method takes a callback function which is invoked if the port is in use. This allows for better error handling and user feedback.