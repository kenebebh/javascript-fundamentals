// Importing built-in modules
// const fs = require("fs");
// const path = require("path");
// const os = require("os");
// import os from "os";

// const importedstudents = require("./index"); //this just runs the entire file
// import { students, ages } from "./index.js"; // Importing named exports from index.js

// console.log(importedtudents);
// console.log(students, ages); //because we arent exporting anything from the file
// console.log("students: " + students); //because we arent exporting students

// // Using fs module to read a file
// fs.readFile("", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data.toString());
// });

// // Using path module
// const filePath = path.join(__dirname, "data", "users.json");
// console.log("Full path:", filePath);

// // Using os module
console.log("Operating System:", os.platform());
console.log("Free Memory:", os.freemem());
