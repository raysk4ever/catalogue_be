const router = require('express').Router();
const ProductCategory = require('../controllers/product');

router.get('', ProductCategory.getAllProducts);
router.post('', ProductCategory.addNewProduct);

module.exports = router;