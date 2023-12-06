// In this section, we demonstrate reading from files.

// Import the 'fs' (file system) module to work with files.
const fs = require("fs");
const http = require('http')

//////////////////////////////////////////////////////////////////////////////////////////////////// FILES

// Blocking synchronous way excercise

// Read the contents of the file "input.txt" synchronously.
// Specifying "utf-8" as the encoding ensures a string result instead of a buffer.
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// // Log the contents of the file to the console.
// console.log('Contents of "input.txt":', textIn);

// // In this section, we demonstrate writing to files.
// const textOut = `This includes information about avocados: ${textIn}.\nCreated on ${new Date()} `;
// fs.writeFileSync('./txt/output.txt', textOut);

// // Confirm that the file has been written.
// console.log('File successfully written to "output.txt"');

// Non-blocking, ASYNCHRONOUS way
// no need to specify the file encoding
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Error!!! 💥");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written 😁");
//       });
//     });
//   });
// });
// // will be logged in first
// console.log("Will read file!!");


//////////////////////////////////////////////////////////////////////////////////////////////////// SERVER

// each time that a new request hits our server, this callback function here will get called,
// the callback function will have access to the request object which holds all kinds of stuff like the request url, and a bunch of other stuff.
http.createServer((req, res) => {
    res.end('Hello from the server!')
})