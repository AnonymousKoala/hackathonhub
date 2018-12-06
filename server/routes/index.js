const userController = require('../controllers').user;
const teamController = require('../controllers').team;
const teamuserController = require('../controllers').teamuser;
const eventController = require('../controllers').event;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Hackathon Hubs API!',
  }));

  app.post('/api/users', userController.create);
  app.get('/api/users', userController.list);

  app.post('/api/teams', teamController.create);
  app.get('/api/teams', teamController.list);

  app.post('/api/teamuser/:teamID/:userID', teamuserController.create);

  app.post('/api/events', eventController.create);
  app.get('/api/events', eventController.list);
  app.get('/api/events/:eventID', eventController.retrieve);

};