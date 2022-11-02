exports.ErrorsHandler = function (err, req, res, next) {
    res.status(400);
    res.send({ error: err });
};
