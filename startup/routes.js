const Brand = require('../routes/brand');
const Category = require('../routes/category');

module.exports = app => {
    app.use('/api/v1/brand', Brand);
    app.use('/api/v1/category', Category);
}
