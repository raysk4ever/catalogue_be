const { Brand, validateBrand } = require('../models/brand');

const addNewBrand = async (req, res) => {
    try{
        console.log(`req`, req.body)
        const { error } = validateBrand(req.body);
        if(error) return res.send({status: false, error: true, errorMessage: `Error: ${error.details[0].message}`});

        let { name } = req.body;
        let brand = await Brand.findOne({name});
        
        if(brand) return res.send({status: false, error: true, errorMessage: `Error: Brand Already Present`});

        brand = new Brand(req.body);
        await brand.save();
        res.send({status: true, error: false, result: `Brand Added successfully`, body: req.body});
    }catch(ex){
        return res.send({status: false, error: true, errorMessage: `Something went wrong. Error: ${ex}`});
    }
}

const getAllBrands = async (req, res) =>{
    try{
        let brands = await Brand.find().sort("name");
        
        res.send({status: true, error: false, brands});
    }catch(ex){
        return res.send({status: false, error: true, errorMessage: `Something went wrong. Error: ${ex}`});
    }
}

module.exports = {
    addNewBrand,
    getAllBrands
}