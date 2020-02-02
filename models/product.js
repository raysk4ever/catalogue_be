const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: "brand" },
    parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
    subCategory: { type: String, default: "" },
    breadcrumb: { type: String, default: "" },
    specifications: { type: mongoose.Schema.Types.Mixed, default: '' },
    createdAt: { type: Date, default: Date.now() }
});

const Product = mongoose.model('product', productSchema);

const validateProduct = product => {
    const Schema = {
        name: Joi.string().required(),
        brand: Joi.objectId(),
        parentCategory: Joi.objectId(),
        subCategory: Joi.string(),
        breadcrumb: Joi.string(),
        specifications: Joi.any(),
    }
    return Joi.validate(product, Schema);
}
exports.Product = Product;
exports.validateProduct = validateProduct; 