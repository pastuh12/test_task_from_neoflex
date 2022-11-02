var express = require('express');
var router = express.Router();

var numberParser = require('../middleware/numberParser');
var checkForInfinity = require('../middleware/checkForInfinity');
var calculatorController = require('../controllers/сalculatorController');

/* GET calculator listing. */
router.use(numberParser.parser)

router.get('/sum', calculatorController.sum);
router.get('/minus', calculatorController.minus);
router.get('/multiplication', calculatorController.multi);
router.get('/division', checkForInfinity.check,calculatorController.division);


module.exports = router;
