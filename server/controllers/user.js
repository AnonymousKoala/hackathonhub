const user = require('../models').user;

module.exports = {
  create(req, res)
  {
    return user
      .create({
        userID: req.body.userID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        userDescription: req.body.userDescription,
        userEmail: req.body.userEmail,
        userRole: req.body.userRole,
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