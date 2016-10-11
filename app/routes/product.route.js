'use strict'
let product = require('mongoose').model('product')
module.exports = function (app) {

   
    app.get('/product', function (req, res) {
        product.find(function (err, product) {
            if (err) {
                console.log(err);
                return next(err);

            } else {
                res.json(product);
            }
        })

    })
    app.post('/product', function (req, res) {
        let products = new product(req.body);
        products.save(function (err) {
            if (err) {
                console.log(err);
                return next(err);

            } else {
                res.json(products);
            }
        })
    })

}