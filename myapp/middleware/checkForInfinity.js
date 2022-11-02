exports.check = function(req, res, next){
    let err = 'route'
    if(req.body.num1 / req.body.num2 == Infinity){
        console.log('Ошибка при проверки на нулевость')
        err = 'Второе число не должно быть нулевым'
        next(err)
    } else{
        next()
    }
}