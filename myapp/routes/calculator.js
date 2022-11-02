var express = require('express');
var router = express.Router();

var numberParser = require('../middleware/numberParser');
var checkForInfinity = require('../middleware/checkForInfinity');
var calculatorController = require('../controllers/сalculatorController');

/* GET calculator listing. */
router.get('/sum', numberParser.parser, calculatorController.sum);
router.get('/minus', numberParser.parser, calculatorController.minus);
router.get('/multiplication', numberParser.parser, calculatorController.multi);
router.get('/division', numberParser.parser, checkForInfinity.check,calculatorController.division);


module.exports = router;
