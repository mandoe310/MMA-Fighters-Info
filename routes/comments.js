const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.put('/comments/:id', ensureLoggedIn, commentsCtrl.edit)
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete)



module.exports = router