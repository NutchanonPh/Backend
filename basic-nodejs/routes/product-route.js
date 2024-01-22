const express = require("express");
const productControllers = require("../controllers/product-controller");

const router = express.Router();

router.get("/", productControllers.getAllProducts);
router.get("/product", (req, res, next)=> {
    res.json({message: "Get Products"});
});
router.get("/product:id", (req, res, next)=> {
    res.json({message: "Get Product by id"});
});
router.get("/:id", productControllers.getProduct);
router.post("/", productControllers.createProduct);
router.put("/:id", productControllers.updateProduct);
router.delete("/:id", productControllers.deleteProduct);

module.exports = router;