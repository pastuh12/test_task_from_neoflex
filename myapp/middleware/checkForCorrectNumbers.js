exports.check = function(req, res, next){
    if(checkNum(req.body.num1) && checkNum(req.body.num2)){
        next()
    }

    err = 'Введены неверные знвчения. Необходимо передавать числа'
    next(err)
}

function checkNum(num){
    if (typeof(num) != number){
        return false;
    }
    if(num > Number.MAX_VALUE || num < Number.MIN_VALUE ){
        return false;
    }

    return true;
}