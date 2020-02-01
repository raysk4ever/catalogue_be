const { Product, validateProduct } = require('../models/product');

const addNewProduct = async (req, res) => {
    try{
        const { error } = validateProduct(req.body);
        if(error) return res.send({status: false, error: true, errorMessage: `Error: ${error.details[0].message}`});

        product = new Product(req.body);
        await product.save();

        res.send({status: true, error: false, result: `Product Added successfully`, body: req.body});
    }catch(ex){
        return res.send({status: false, error: true, errorMessage: `Something went wrong. Error: ${ex}`});
    }
}

const getAllProducts = async (req, res) =>{
    try{
        let products = await Product.find().sort("name");
        res.send({status: true, error: false, products});
    }catch(ex){
        return res.send({status: false, error: true, errorMessage: `Something went wrong. Error: ${ex}`});
    }
}

module.exports = {
    addNewProduct,
    getAllProducts
}