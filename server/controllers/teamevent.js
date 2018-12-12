const TeamEvent = require('../models').TeamEvent;

module.exports = {
  create(req, res) {
    return TeamEvent
      .create({
        title: req.body.title,
        teamID: req.body.teamID,
        eventID: req.body.eventID,
      })
      .then(teamevent => res.status(201).send(teamevent))
      .catch(error => res.status(400).send(error));
  },

  list(req,res)
  {
    return TeamEvent
    .all()
    .then(teamevent=> res.status(200).send(teamevent))
    .catch(error => res.status(400).send(error))
  },

  retrieveEvent(req, res)
  {
  return TeamEvent
    .findAll({where:{eventID: req.params.eventID}})
    .then(teamevent =>
    {
      console.log(req.params.eventID);
      if (!TeamEvent)
      {
        return res.status(404).send({message: 'TeamEvent Not Found',});
      }
      return res.status(200).send(teamevent);
    })
    .catch(error => res.status(400).send(error));
  },

  retrieveTeam(req, res)
  {
  return TeamEvent
    .findAll({where:{teamID: req.params.teamID}})
    .then(teamevent =>
    {
      console.log(req.params.eventID);
      if (!TeamEvent)
      {
        return res.status(404).send({message: 'TeamEvent Not Found',});
      }
      return res.status(200).send(teamevent);
    })
    .catch(error => res.status(400).send(error));
  },

  destroy(req, res)
  {
  return TeamEvent
    .findAll({where:{eventID: req.params.eventID, teamID: req.params.teamID}})
    .then(teamevent => {
      if (!TeamEvent)
      {
        return res.status(400).send({
          message: 'Event Not Found',
        });
      }

      console.log("Found a match.");
      return TeamEvent
        .destroy(
            {where:{
                eventID: req.params.eventID,
                teamID: req.params.teamID
            }
        })
        .then(() => res.status(204).send({message: 'Event successfully deleted.'}))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}



};