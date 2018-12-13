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
  },

  retrieve(req, res)
  {
  return team
    .findOne({where:{id: req.params.teamID}})
    .then(team =>
    {
      console.log(req.params.teamID);
      if (!team)
      {
        return res.status(404).send({message: 'team Not Found',});
      }
      return res.status(200).send(team);
    })
    .catch(error => res.status(400).send(error));
  },

  update(req, res) {
  return team
    .findOne({where:{id: req.params.teamID}})
    .then(team =>
    {
      if (!team)
      {
        return res.status(404).send({
          message: 'team Not Found',
        });
      }
      return team
        .update({
          teamName: req.body.teamName || team.teamName
        })
        .then(() => res.status(200).send(team))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
  return team
    .findOne({where:{id: req.params.teamID}})
    .then(team => {
      if (!team) {
        return res.status(400).send({
          message: 'team Not Found',
        });
      }
      return team
        .destroy()
        .then(() => res.status(204).send({message: 'team successfully deleted.'}))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},
};