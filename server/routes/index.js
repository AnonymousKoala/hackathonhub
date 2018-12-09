const userController = require('../controllers').user;
const teamController = require('../controllers').team;
const teamuserController = require('../controllers').teamuser;
const eventController = require('../controllers').event;

module.exports = (app) =>
{
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Hackathon Hubs API!',
  }));

  //USER API CALLS.
  app.post('/api/users', userController.create);
  app.get('/api/users', userController.list);
  app.get('/api/users/:userID', userController.retrieve);
  app.put('/api/users/:userID', userController.update);
  app.delete('/api/users/:userID', userController.destroy);

  //TEAM API CALLS.
  app.post('/api/teams', teamController.create);
  app.get('/api/teams', teamController.list);
  app.get('/api/teams/:teamID', teamController.retrieve);
  app.put('/api/teams/:teamID', teamController.update);
  app.delete('/api/teams/:teamID', teamController.destroy);

  //TEAMUSER API CALLS.
  app.post('/api/teamuser/:teamID/:userID', teamuserController.create);

  //EVENT API CALLS.
  app.post('/api/events', eventController.create);
  app.get('/api/events', eventController.list);
  app.get('/api/events/:eventID', eventController.retrieve);
  app.get('/api/events/searchevent/:eventName', eventController.searchEvent);
  app.put('/api/events/:eventID', eventController.update);
  app.delete('/api/events/:eventID', eventController.destroy);

};