'use strict'

let mongoose = require('./node_modules/config/mongoose');
let express = require('./node_modules/config/express');

let db = mongoose();
let app = express();


app.listen(process.env.PORT || 5000);
console.log("server is runing http://localhost:5000");
