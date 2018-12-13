const TeamUser = require('../models').TeamUser;
const team = require('../models').team;
const user = require('../models').user;

module.exports = {
  create(req, res)
  {
    return TeamUser
      .create({
        title: req.body.title,
        teamID: req.body.teamID,
        userID: req.body.userID,
      })
      .then(teamuser => res.status(201).send(teamuser))
      .catch(error => res.status(400).send(error));
  },

  retrieveTeam(req, res)
    {
    return TeamUser
      .findAll({where:{teamID: req.params.teamID}})
      .then(teamuser=>
      {
        if (!TeamUser)
        {
          return res.status(404).send({message: 'TeamUser Not Found',});
        }
        return res.status(200).send(teamuser);
      })
      .catch(error => res.status(400).send(error));
    },

    retrieveUser(req, res)
    {
    return TeamUser
      .findAll({where:{userID: req.params.userID}})
      .then(teamuser=>
      {
        if (!TeamUser)
        {
          return res.status(404).send({message: 'TeamUser Not Found',});
        }
        return res.status(200).send(teamuser);
      })
      .catch(error => res.status(400).send(error));
    },

    destroy(req, res)
      {
      return TeamUser
        .findAll({where:{userID: req.params.userID, teamID: req.params.teamID}})
        .then(teamuser => {
          if (!TeamUser)
          {
            return res.status(400).send({
              message: 'Event Not Found',
            });
          }

          return TeamUser
            .destroy(
                {where:{
                    userID: req.params.userID,
                    teamID: req.params.teamID
                }
            })
            .then(() => res.status(204).send({message: 'TeamUser successfully deleted.'}))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    },

  list(req,res)
  {
    return TeamUser
    .all()
    .then(teamuser=> res.status(200).send(teamuser))
    .catch(error => res.status(400).send(error))
  },

  findAssociateTeam(req,res)
  {
    return TeamUser
    .findAll({
      attributes: [
      ],
      include: [{
        model: team,
        as: 'team'
      }],
      where: {userID: req.params.userID}
    })
    .then(teamuser => {return res.status(200).send(teamuser);})
    .catch(error => res.status(400).send(error))
  },

  findAssociateUser(req,res)
  {
    return TeamUser
    .findAll({
      attributes: [
      ],
      include: [{
        model: user,
        as: 'user'
      }],
      where: {teamID: req.params.teamID}
    })
    .then(teamuser => {return res.status(200).send(teamuser);})
    .catch(error => res.status(400).send(error))
  },
};