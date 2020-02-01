const Brand = require('../routes/brand');
const Category = require('../routes/category');
const Product = require('../routes/product');

module.exports = app => {
    app.use('/api/v1/brand', Brand);
    app.use('/api/v1/category', Category);
    app.use('/api/v1/product', Product);
    
}
