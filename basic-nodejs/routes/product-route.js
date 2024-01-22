const express = require("express");

const router = express.Router();

router.get("/product", (req, res, next)=> {
    res.json({message: "Get Products"});
});
router.get("/product:id", (req, res, next)=> {
    res.json({message: "Get Product by id"});
});
router.post("/product", (req, res, next)=> {
    res.json({message: "Create Product"});
});
router.put("/product/:id", (req, res, next)=> {
    res.json({});
});
router.delete("/product/:id", (req, res, next)=> {
    res.json({});
});

module.exports = router;