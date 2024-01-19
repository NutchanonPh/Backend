const express = require("express");
const app = express();

// app.use((req, res, next)=> {
//     console.log("Welcome to web-blogs")
//     res.json({})
// });

app.listen("8000", ()=> {
    console.log("web-blogs app is running on port 8000")
});