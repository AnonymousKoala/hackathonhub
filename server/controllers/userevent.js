const UserEvent = require('../models').UserEvent;

module.exports = {
  create(req, res) {
    return UserEvent
      .create({
        title: req.body.title,
        userID: req.body.userID,
        eventID: req.body.eventID,
      })
      .then(userevent => res.status(201).send(userevent))
      .catch(error => res.status(400).send(error));
  },

  list(req,res)
  {
    return UserEvent
    .all()
    .then(userevent=> res.status(200).send(userevent))
    .catch(error => res.status(400).send(error))
  },

  retrieveUser(req, res)
  {
  return UserEvent
    .findAll({where:{userID: req.params.userID}})
    .then(userevent =>
    {
      if (!UserEvent)
      {
        return res.status(404).send({message: 'UserEvent Not Found',});
      }
      return res.status(200).send(userevent);
    })
    .catch(error => res.status(400).send(error));
  },

  retrieveEvent(req, res)
  {
  return UserEvent
    .findAll({where:{eventID: req.params.eventID}})
    .then(userevent =>
    {
      if (!UserEvent)
      {
        return res.status(404).send({message: 'UserEvent Not Found',});
      }
      return res.status(200).send(userevent);
    })
    .catch(error => res.status(400).send(error));
  },


  destroy(req, res)
  {
  return UserEvent
    .findAll({where:{eventID: req.params.eventID, userID: req.params.userID}})
    .then(userevent => {
      if (!UserEvent)
      {
        return res.status(400).send({
          message: 'UserEvent Not Found',
        });
      }

      return UserEvent
        .destroy(
            {where:{
                eventID: req.params.eventID,
                userID: req.params.userID
            }
        })
        .then(() => res.status(204).send({message: 'UserEvent successfully deleted.'}))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}


};