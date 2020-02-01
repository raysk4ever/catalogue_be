const mongoose = require("mongoose");
const Joi = require('joi');


const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
})

const Category = mongoose.model('category', categorySchema);

const validateCategory = category =>{
    const Schema = {
        name: Joi.string().required()
    }
    return Joi.validate(category, Schema);
}

exports.validateCategory = validateCategory;
exports.Category = Category;