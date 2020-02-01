const { Category, validateCategory } = require('../models/category');

const addNewCategory = async (req, res) => {
    try{
        const { error } = validateCategory(req.body);
        if(error) return res.send({status: false, error: true, errorMessage: `Error: ${error.details[0].message}`});

        let { name } = req.body;
        let category = await Category.findOne({name});
        
        if(category) return res.send({status: false, error: true, errorMessage: `Error: Category Already Present`});

        category = new Category(req.body);
        await category.save();
        res.send({status: true, error: false, result: `Category Added successfully`, body: req.body});
    }catch(ex){
        return res.send({status: false, error: true, errorMessage: `Something went wrong. Error: ${ex}`});
    }
}

const getAllCategories = async (req, res) =>{
    try{
        let categories = await Category.find().sort("name");
        res.send({status: true, error: false, categories});
    }catch(ex){
        return res.send({status: false, error: true, errorMessage: `Something went wrong. Error: ${ex}`});
    }
}

module.exports = {
    addNewCategory,
    getAllCategories
}