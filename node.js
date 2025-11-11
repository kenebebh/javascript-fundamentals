// Import the built-in http module. Node.js includes a powerful built-in HTTP module that enables you to create HTTP servers and make HTTP requests.

const http = require("http");

//  Create the server
// The createServer method takes a callback function that will be executed
// every time an HTTP request is made to the server.
// This callback receives two arguments:
// - req (request object): Contains information about the incoming request (URL, method, headers, etc.)
// - res (response object): Used to send data back to the client.
const server = http.createServer((req, res) => {
  // Log the incoming request details to the console (useful for debugging)
  console.log(`Request received: ${req.method} ${req.url}`);

  // Set response header content type
  res.setHeader("Content-Type", "text/html");

   if (pathname === "/") {
    res.end("<h1>Welcome to Homepage!</h1>");
  } else if (pathname === "/about") {
    res.end("<h1>About Us</h1><p>This is the about page.</p>");
  } else if (pathname === "/contact") {
    res.end("<h1>Contact Us</h1><p>Email: contact@example.com</p>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

// Start server on port 3000
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//routing with Node.js

// const http = require("node:http");
// // import http from "node:http";
// const url = require("node:url");

// const server = http.createServer((req, res) => {
//   const pathname = url.parse(req.url).pathname;

//   // Set common header
//   res.writeHead(200, { "Content-Type": "text/html" });

//or set Header
// res.setHeader('Content-Type', 'text/html');

//   if (pathname === "/") {
//     res.end("<h1>Welcome to Homepage!</h1>");
//   } else if (pathname === "/about") {
//     res.end("<h1>About Us</h1><p>This is the about page.</p>");
//   } else if (pathname === "/contact") {
//     res.end("<h1>Contact Us</h1><p>Email: contact@example.com</p>");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end("<h1>404 - Page Not Found</h1>");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3001/");
// });
