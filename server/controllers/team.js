const team = require('../models').team;

module.exports = {
  create(req, res) {
    return team
      .create({
        teamID: req.body.teamID,
        teamName: req.body.teamName,
      })
      .then(team => res.status(201).send(team))
      .catch(error => res.status(400).send(error));
  },

  list(req,res)
  {
    return team.all()
    .then(user=> res.status(200).send(user))
    .catch(error => res.status(400).send(error))
  }
};