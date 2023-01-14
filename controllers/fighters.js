const Fighter = require('../models/fighter')

module.exports = {
    index,
    new: newFighter,
    create,
}

function index(req, res) { 
    Fighter.find({}, function(err, fighters) {
        console.log(fighters)
        res.render('fighters/index', { fighters })
    })
    }

function newFighter(req, res) {
    res.render('fighters/new')
}

function create(req, res) {
    const fighter = new Fighter(req.body);
    fighter.save(function (err) {
        if (err) return res.redirect('/fighters/new');
        console.log(fighter);
        res.redirect('/fighters');
    });
}
