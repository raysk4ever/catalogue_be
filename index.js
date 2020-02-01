const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json())

//db
require('./startup/db')();

//routes
require('./startup/routes')(app);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`running at port ${port}...`))