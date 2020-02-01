const mongoose = require("mongoose");

module.exports = () =>{
    const url = 'mongodb+srv://ravi:ravi@cluster0-7pwcx.mongodb.net/test?retryWrites=true&w=majority';
    const options = { useUnifiedTopology: true, useNewUrlParser: true };

    mongoose.connect(url, options)
    .then(()=>console.log(`connected to mongodb`))
    .catch(err=>console.log(`Mongodb Error: ${err}`))
}