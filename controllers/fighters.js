const Fighter = require('../models/fighter')

module.exports = {
    index,
    show,
    new: newFighter,
    create,
    delete: deleteFighter,
    edit,
    update,

}

function index(req, res) { 
    Fighter.find({}, function(err, fighters) {
        console.log(fighters)
        res.render('fighters/index', { fighters })
    })
    }

function show(req, res) {
    Fighter.findById(req.params.id, function (err, fighter) {
            console.log(fighter);
            res.render("fighters/show", { name: "Fighter Details", fighter });
        });
    };
         
function newFighter(req, res) {
    res.render('fighters/new', { title: 'Add Fighter' })
}

function create(req, res) {
    const fighter = new Fighter(req.body);
    fighter.save(function (err) {
        if (err) return res.redirect('/fighters/new');
        console.log(fighter);
        res.redirect('/fighters');
    });
}

function deleteFighter(req, res,) {
    Fighter.deleteOne(req.params.id)
    res.redirect('/fighters')
  }

  function edit(req, res, next) {
    Fighter.findById(req.params.id, function (err, fighter) {
        if (err) { return next(err); }
        res.render('fighters/edit', { fighter })
    });
}

  function update(req, res, next) {
    const updatedFighter = {
        age: req.body.age,
        weight: req.body.weight,
        record: req.body.record
    }
    Fighter.findByIdAndUpdate(req.params.id, updatedFighter, { new: true }, function (err, fighter) {
        if (err) { return next(err); }
        res.redirect(`/fighters/${fighter._id}`);
    });

}
