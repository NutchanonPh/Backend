// const obj = require("./data")

//const testFunc = require("./data");

// console.log(obj)

//const {a, testFunc} = require("./data");

// console.log(a);
// console.log(testFunc);

// const helloFunc = require("./data");
// console.log(helloFunc());

// const {testFunc} = require("./data");
// testFunc;

// console.log(__dirname);
// console.log(__filename);

// const path = require("path");

// console.log(__dirname + "/" + "data.js");
// console.log(path.join(__dirname, "data.js"));

//ReadFile and WriteFile

// const fs = require("fs");
// const path = require("path");
// fs.readFile(
//     path.join(__dirname, "hello.txt"), 
//     {encoding: "utf-8"},
//     (err, data)=> {
//         // console.log(data);
//         //WriteFile
//         fs.writeFile("hello2.txt", data, ()=> {
//             console.log("Done WriteFile")
//         })
// });

// const fs = require("fs/promises");
// const path = require("path");
// const run = async ()=> {
//     const data = await fs.readFile(path.join(__dirname, "hello.txt"), {
//         encoding: "utf-8",
//     });
//     console.log(data);
// };
// run();

// Use library http
// const http = require("http");

// const server = http.createServer((req, res)=> {
//     console.log(req.method);
//     console.log(req.url);

//     res.end("Hello")
// });

// server.listen("8000", ()=> {
//     console.log("Server is running on port 8000")
// });

// // Lab 1 build-in library
// // import fs build-in module 
// const fs = require("fs");
// // install axios and uuid => npm i axios uuid
// // import axios and uuid
// const axios = require("axios")
// const uuid = require("uuid");
// const {v4: uuidv4} = require("uuid");
// console.log(uuidv4());

// Lab 2 Create fileServcie.js
// import
const {readFileJSON, writeFileJSON} = require("./fileService");
const run = async()=> {
    const readData = await readFileJSON("hello.txt");
    //console.log(readData);
    writeFileJSON("hello3.txt", readData);
};
run();