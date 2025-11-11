// const fs = require("fs");
// import fs from "fs";

//reading files
// fs.readFile("./documents/blogText.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
//reading files is asynchronous and doesnt block the next lines of code

//writing files
// fs.writeFile("./documents/blogText.txt", "Javascript is awesome", () => {
//   console.log("File was written");
// });

//create and delete directories
// if(!fs.existsSync('./assets')) {

// } else {
//   fs.rmdir("./assets", (err) => {
//     if(err) {
//       console.log(err)
//     }
//     console.log('folder deleted')
//   })
// }

// fs.mkdir("./assets", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("folder created");
// });

//deleting files
// if (fs.existsSync("./documents/deleteme.txt")) {
//   fs.unlink("./documents/deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("File deleted");
//   });
// }
