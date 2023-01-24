var express = require('express');
var router = express.Router();
const fightersCtrl = require('../controllers/fighters');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET users listing. */
router.get('/', fightersCtrl.index)
router.get('/new', ensureLoggedIn, fightersCtrl.new);
router.get('/:id', fightersCtrl.show);
router.post('/', ensureLoggedIn, fightersCtrl.create)
router.delete('/:id', ensureLoggedIn, fightersCtrl.delete)
router.get('/:id/edit', ensureLoggedIn, fightersCtrl.edit)
router.put('/:id', ensureLoggedIn, fightersCtrl.update)



module.exports = router;
