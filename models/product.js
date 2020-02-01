const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "brand" },
    parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
    subCategory: { type: String, default: "" },
    breadCrumb: { type: String, default: "" },
    Specifications: { type: mongoose.Schema.Types.Mixed, default: '' }
});

const Product = mongoose.model('product', productSchema);

const validateProduct = product => {
    const Schema = {
        name: Joi.string().require(),
        brand: Joi.objectId(),
        parentCategory: Joi.objectId(),
        subCategory: Joi.string(),
        breadCrumb: Joi.string(),
        Specifications: Joi.any(),
    }
    return Joi.validate(product, Schema);
}
exports.Product = Product;
exports.validateProduct = validateProduct; 