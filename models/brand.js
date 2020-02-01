const mongoose = require("mongoose");
const Joi = require('joi');


const brandSchema = new mongoose.Schema({
    name: { type: String, required: '' },
    createdAt: { type: Date, default: Date.now() }
})

const Brand = mongoose.model('brand', brandSchema);

const validateBrand = brand =>{
    const Schema = {
        name: Joi.string().required()
    }
    return Joi.validate(brand, Schema);
}

exports.validateBrand = validateBrand;
exports.Brand = Brand;