exports.parser = function(req, res, next){
    let err = 'route'
    let parsedNum1 = parseFloat(req.body.num1)
    let parsedNum2 = parseFloat(req.body.num2)

    if(!isNaN(parsedNum1) && !isNaN(parsedNum2)){
        req.body.num1 = parsedNum1;
        req.body.num2 = parsedNum2;
        next()
    } else{
        err = 'Нужно ввести числа';
    }

    next(err)

}

