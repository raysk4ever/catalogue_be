const router = require('express').Router();
const CategoryController = require('../controllers/category');

router.get('', CategoryController.getAllCategories);
router.post('', CategoryController.addNewCategory);

module.exports = router;