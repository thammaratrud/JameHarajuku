'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
    code: String,
    name: String

});

mongoose.model('product',productSchema);