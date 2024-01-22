const express = require("express");
const app = express();

// const bodyMiddleware = express.json();
// app.use(express.json());

// app.get("/product", (req, res, next) => {
//     const {username, password} = req.body;

//     res.json({username, password});
// });

const middlewareA = (req, res, next) => {
    const {message} = req.body;
    req.myMessage = message;
    next();
};

//app.use(middlewareA);

app.get("/", (req, res, next)=> {
    console.log(req.myMessage);
    res.json();
});

app.patch("/", middlewareA, (req, res, next)=> {
    console.log(req.myMessage);
    res.json();
})

app.listen("8000", ()=> {
    console.log("Server is running on port 8000");
});