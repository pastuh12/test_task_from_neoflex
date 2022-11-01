var express = require('express');
var router = express.Router();

var calculator_controller = require('../controllers/сalculatorController');

/* GET users listing. */
router.get('/sum', calculator_controller.sum);

module.exports = router;
