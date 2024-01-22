// const bodyMiddleware = express.json();
// app.use(express.json());

// app.get("/product", (req, res, next) => {
//     const {username, password} = req.body;

//     res.json({username, password});
// });

// const middlewareA = (req, res, next) => {
//     const {message} = req.body;
//     req.myMessage = message;
//     next();
// };

//app.use(middlewareA);

// app.get("/", (req, res, next)=> {
//     console.log(req.myMessage);
//     res.json();
// });

// app.patch("/", middlewareA, (req, res, next)=> {
//     console.log(req.myMessage);
//     res.json();
// })

// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");

// const upload = multer({dest: 'uploads/'})
// const app = express();

// app.use(express.json());

// app.post("/", upload.single("image"), (req, res, next)=> {
//     try {
//     console.log(req.file);
//     // upload ขึ้น cloud
//     // return url
//     // update url => db server
//     // delete file => fs.unlinkSync
//     res.json({});
//     } catch(err) {
//         next(err);
//     } finally {
//         setTimeout(()=> {
//             fs.unlinkSync(req.file.path);
//         }, 3000)
//     }
// });

// Lab 1
const express = require("express");
const app = express();

app.use(express.json());

app.get("/product", (req, res, next)=>{
    const {page, limit, order} = req.query;
    res.json({page, limit, order});
});

app.post("/product", (req, res, next)=> {
    const {name, price, description} = req.body;
    res.json({name, price, description});
});

app.put("/product/:id", (req, res, next)=> {
    const {name, price, description} = req.body;
    const {id} = req.params;
    res.json({name, price, descriptionm, id});
});

app.delete("/product/:id", (req, res, next)=> {
    const {id} = req.params;
    res.json({id});
});

app.listen("8000", ()=> {
    console.log("Server is running on port 8000");
});