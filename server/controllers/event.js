const event = require('../models').event;

module.exports = {
  create(req, res)
  {
    return event
      .create({
        eventID: req.body.eventID,
        eventName: req.body.eventName,
        timeStart: req.body.timeStart,
        timeEnd: req.body.timeEnd,
        eventDescription: req.body.eventDescription,
        eventAddress: req.body.eventAddress,
        eventCity: req.body.eventCity,
        eventZip: req.body.eventZip
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  list(req,res)
  {
    return event
    .all()
    .then(event=> res.status(200).send(event))
    .catch(error => res.status(400).send(error))
  },

  retrieve(req, res)
  {
  return event
    .findOne({where:{eventID: req.params.eventID}})
    .then(event =>
    {
      console.log(req.params.eventID);
      if (!event)
      {
        return res.status(404).send({message: 'Event Not Found',});
      }
      return res.status(200).send(event);
    })
    .catch(error => res.status(400).send(error));
  },

  update(req, res) {
  return event
    .findOne({where:{eventID: req.params.eventID}})
    .then(event =>
    {
      if (!event)
      {
        return res.status(404).send({
          message: 'Event Not Found',
        });
      }
      return event
        .update({
          eventName: req.body.eventName || event.eventName,
          timeStart: req.body.timeStart || event.timeStart,
          timeEnd: req.body.timeEnd || event.timeEnd,
          eventDescription: req.body.eventDescription || event.eventDescription,
          eventAddress: req.body.eventAddress || event.eventAddress,
          eventCity: req.body.eventCity || event.eventCity,
          eventZip: req.body.eventZip || event.eventZip
        })
        .then(() => res.status(200).send(event))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
  return event
    .findOne({where:{eventID: req.params.eventID}})
    .then(event => {
      if (!event) {
        return res.status(400).send({
          message: 'Event Not Found',
        });
      }
      return event
        .destroy()
        .then(() => res.status(204).send({message: 'Event successfully deleted.'}))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},



};