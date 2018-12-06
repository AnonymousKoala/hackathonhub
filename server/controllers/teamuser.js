const teamuser = require('../models').teamuser;

module.exports = {
  create(req, res)
  {
    return teamuser
      .create({
        team_user_id: req.body.team_user_id,
        teamID: req.params.teamID,
        userID: req.params.userID,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  list(req,res)
  {
    return user
    .all()
    .then(user=> res.status(200).send(user))
    .catch(error => res.status(400).send(error))
  }
};