const express = require("express");

const app = express();

// app.use((req, res, next)=> {
//     console.log("Hello")
//     res.json({message: "Hello"});
// });

// app.get("/", (req, res)=> {
//     res.json({message: "GET"});
// });
// app.post("/", (req, res)=> {});
// app.put("/", (req, res)=> {});
// app.patch("/", (req, res)=> {});
// app.delete("/", (req, res)=> {});

app.listen("8000", ()=> {
    console.log("Server is running on port 8000")
});

// Lab 1 Express
app.get("/", (req, res)=> {
    res.json({title: "My First Web App", message: "Our Web App API"})
});

//Lab 2 Express
app.get("/post", (req, res)=> {
    const method = req.method
    res.json({message: method + " " + "products"});
});
app.post("/post", (req, res)=> {
    const method = req.method
    res.json({message: method + " " + "products"});
});
app.put("/post", (req, res)=> {
    const method = req.method
    res.json({message: method + " " + "products"});
});
app.patch("/post", (req, res)=> {
    const method = req.method
    res.json({message: method + " " + "products"});
});
app.delete("/post", (req, res)=> {
    const method = req.method
    res.json({message: method + " " + "products"});
});

//Lab 3 Express
app.get("/redirect", (req, res)=> {
    res.redirect("https://google.com")
});