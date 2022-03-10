const express = require("express");
const router = express.Router()

// controle + router
const ProductController = require('../controllers/ProductController');
router.get('/', ProductController.showProducts)


// Export
module.exports = router
