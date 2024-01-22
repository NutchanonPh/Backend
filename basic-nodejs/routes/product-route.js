const express = require("express");
const productControllers = require("../controllers/product-controller");

const router = express.Router();

router.get("/", productControllers.getAllProducts);
router.get("/:id", (req, res, next) => {
  res.json({ message: "Get product by id" });
});
router.post("/", (req, res, next) => {
  res.json({ message: "Create product" });
});
router.put("/:id", (req, res, next) => {
  res.json({});
});
router.delete("/:id", (req, res, next) => {
  res.json({});
});
router.get("/:id", productControllers.getProduct);
router.post("/", productControllers.createProduct);
router.put("/:id", productControllers.updateProduct);
router.delete("/:id", productControllers.deleteProduct);

module.exports = router;