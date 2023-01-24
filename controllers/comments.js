const Fighter = require('../models/fighter')

module.exports = {
    create,
    delete: deleteComment,
    edit,
    update
}

function create(req, res) {
    Fighter.findById(req.params.id, function(err, fighter) {
      
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      
      fighter.comments.push(req.body);
      fighter.save(function(err) {
        console.log(fighter)
        res.redirect(`/fighters/${fighter._id}`);
      });
    });
  }

  async function deleteComment(req, res, next) {
    try {
        const fighter = await Fighter.findOne({'comments._id': req.params.id})
        if (!fighter) return res.redirect('/fighters')
        fighter.comments.remove(req.params.id)
        await fighter.save()
        res.redirect(`/fighters/${fighter._id}`)
    } catch(err) {
        return next(err)
    }
}

function edit(req, res) {
  res.render('comments/edit', {
    title: 'Edit Comment',
    comment: comment.getOne(req.params.id)
  })
}

function update(req, res) {
  Fighter.updateOne(req.body, req.params.id)
  res.redirect(`/fighters/${req.params.id}`)
}
