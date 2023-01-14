var express = require('express');
var router = express.Router();
const fightersCtrl = require('../controllers/fighters');

/* GET users listing. */
router.get('/', fightersCtrl.index)
router.get('/new', fightersCtrl.new)
router.post('/', fightersCtrl.create)


module.exports = router;
