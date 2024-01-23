require('dotenv').config()
const express = require("express");
const cors = require("cors");

const errorHandler = require("./middlewares/error");
const notFounbdHandler = require("./middlewares/notFound");

const app = express();

app.use(cors());
app.use(express.json());

app.use(errorHandler);
app.use("*", notFounbdHandler);

const port = process.env.PORT
app.listen(port, ()=> {
    console.log("Server run on port" + " " + port);
});