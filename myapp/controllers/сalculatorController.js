const { json } = require("express")

//Return the sum of two numbers
exports.sum = function(req, res) {
    

    res.send({result: req.body.num1 + req.body.num2});
}

exports.minus = function(req, res){

    console.log(req.body.num1 + req.body.num2)
    res.send({result: req.body.num1 + req.body.num2});
}

exports.multi = function(req, res){

    res.send({return: req.body.num1 * req.body.num2});
}

exports.division = function(req, res){

    res.send({return: req.body.num1 / req.body.num2});
}