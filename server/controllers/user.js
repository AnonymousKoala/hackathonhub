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
  },

  retrieve(req, res)
  {
  return user
    .findOne({where:{id: req.params.userID}})
    .then(user =>
    {
      console.log(req.params.userID);
      if (!user)
      {
        return res.status(404).send({message: 'user Not Found',});
      }
      return res.status(200).send(user);
    })
    .catch(error => res.status(400).send(error));
  },

  update(req, res) {
  return user
    .findOne({where:{id: req.params.userID}})
    .then(user =>
    {
      if (!user)
      {
        return res.status(404).send({
          message: 'user Not Found',
        });
      }
      return user
        .update({
          userName: req.body.userName || user.userName,
          firstName: req.body.firstName || user.firstName,
          lastName: req.body.lastName || user.lastName,
          userName: req.body.userName || user.userName,
          userDescription: req.body.userDescription || user.userDescription,
          userEmail: req.body.userEmail || user.userEmail,
          userRole: req.body.userRole || user.userRole
        })
        .then(() => res.status(200).send(user))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
  return user
    .findOne({where:{id: req.params.userID}})
    .then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'user Not Found',
        });
      }
      return user
        .destroy()
        .then(() => res.status(204).send({message: 'user successfully deleted.'}))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},
};