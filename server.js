const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  // Set response header content type
  res.setHeader("Content-Type", "text/html");

  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      return;
    } else {
      res.write(data); // Write the HTML content to the response
      res.end(); // End the response
    }
  });
});

// Start server on port 3000
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

//basic routing example
//create different routes so you can send different content depending on the route your user visits

// routing
//   let path = './views/';
//   switch(req.url) {
//     case '/':
//       path += 'index.html';
//       res.statusCode = 200;
//       break;
//     case '/about':
//       path += 'about.html';
//       res.statusCode = 200;
//       break;
//     case '/about-us':
//       res.statusCode = 301;
//       res.setHeader('Location', '/about');
//       res.end();
//       break;
//     default:
//       path += '404.html';
//       res.statusCode = 404;
//   }

//   // send html
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     }
//     //res.write(data);
//     res.end(data);
//   });

/////redirects
//     case '/about-us':
//       res.statusCode = 301;
//       res.setHeader('Location', '/about');
//       res.end();
//       break;
