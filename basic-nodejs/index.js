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

const express = require("express");
const multer = require("multer");

const upload = multer({dest: 'uploads/'})
const app = express();

app.use(express.json());

app.post("/", upload.single("image"), (req, res, next)=> {
    try {
    console.log(req.file);
    // upload ขึ้น cloud
    // return url
    // update url => db server
    // delete file => fs.unlinkSync
    res.json({});
    } catch(err) {
        next(err);
    } finally {
        setTimeout(()=> {
            fs.unlinkSync(req.file.path);
        }, 3000)
    }
});

app.listen("8000", ()=> {
    console.log("Server is running on port 8000");
});