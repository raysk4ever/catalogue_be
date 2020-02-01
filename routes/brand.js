const router = require('express').Router();
const BrandController = require('../controllers/brand');

router.get('', BrandController.getAllBrands);
router.post('', BrandController.addNewBrand);

module.exports = router;