// server/routes/cartRoutes.js
const express = require("express");
const router = express.Router();
const { createCart } = require("../controllers/cartController");

router.post("/create", createCart);

module.exports = router;
