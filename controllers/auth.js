const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth');

const router = express.Router();
const User = models.User;
const Hackathons = models.Hackathons;
const Teams = models.Teams;
const Attendees = models.Attendees;
const Userteams = models.Userteams;


var path = require('path');

router.get('/error', (req, res) => {
  res.sendStatus(401);
})


router.post('/signup', (req,res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password_hash: req.body.password,
  }).then((user) => {
    res.json({ msg: "user created" });
  }).catch(() => {
    res.status(400).json({ msg: "error creating user" });
  });
});

router.post('/addhackathon', (req, res) => {
  Hackathons.create({
    eventName: req.body.eventName,
    eventDescription: req.body.eventDescription,
    eventCity: req.body.eventCity,
    eventState: req.body.eventState,
  }).then((hackathons) =>{
    res.redirect('/hackathonsadd');
  }).catch(() => {
    res.status(400).json({msg : "error making hackathon"});
  });

});

router.post('/adduserteams', (req, res) => {
  Userteams.create({
    eventName: req.body.eventName,
    teamName: req.body.teamName,
    user: req.body.user,
  }).then((userteams) =>{
    res.redirect('/hackathonsadd');
  }).catch(() => {
    res.status(400).json({msg : "error making hackathon"});
  });

});

router.get('/hubDashboard', (req, res) => {

  var event_teams;
  Userteams.findAll({where:{user: req.param('user')}, raw:true}).then((result) =>{
    event_teams = result;
  })

  User.findAll({where:{username: req.param('user')}, raw: true}).then((result) =>{
    res.render('hubDashboard', {userinfo: result[0], event_teams: event_teams});
  })

  //res.render('hubDashboard', {userinfo: userinfo.lastName});

});

router.post('/addteam', (req, res) => {
  var add_user = req.param('user');

  Teams.update(
    {member4: req.param('name')},
    {where: {eventName: req.param('eventName')}
  }).catch(() => {
    res.stasus(400).json({msg:"error updating teams"});
  });

  Userteams.create({
    eventName: req.param('eventName'),
    teamName: req.param('teamName'),
    user: req.param('user'),
  }).then((userteams) =>{
    res.json({msg:"added user to team to userteams"});
  }).catch(() => {
    res.status(400).json({msg:"error adding to userteams table"});
  });
});

router.get('/hackathon', (req, res) => {
  var param_id = req.param('id');
  var user = req.param('user');

  var event_teams;
  Teams.findAll({where:{eventName: req.param('eventName')}, raw:true}).then((result) =>{
    event_teams = result;
    
  })
  
  Hackathons.findAll({where: {id: param_id}, raw: true}).then((result) => {
      res.render('hackathon', {result: result[0], event_teams: event_teams, username: user});
      //res.json({msg: "This is wht shows: " + result[0].id});
    })
    .catch(error =>{
      console.log('Error:', error);
    });
  
  //res.render('hackathon');

});

router.post('/addteams', (req, res) => {
  Teams.create({
    eventName: req.body.eventName,
    teamName: req.body.teamName,
    member1: req.body.member1,
    member2: req.body.member2,
    member3: req.body.member3,
    member4: req.body.member4,

  }).then((teams) => {
    res.redirect('/hackathonsadd');
  }).catch(() => { 
    res.status(400).json({msg: "error making teams"});
  });
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/auth/error' }),
  (req, res) => {
    res.json({
      id: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
    });
  });


router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});


router.get('/profile',
  passport.redirectIfNotLoggedIn('/auth/error'),
  (req, res) => {
    res.json({ msg: "This is the profile page for: "+req.user.email });
});

router.get('/', (req, res) =>{
  res.render('hubLogin');
});

// router.get('/', (req, res) =>{
//   res.sendFile(path.join(__dirname, '../public','mainPage/hompage.html'));
// });

// router.post('/mainPage',function(req,res){
//   res.sendFile(path.join(__dirname, '../public', 'mainPage/homePage.html'));
// });

router.post('/homepage',function(req,res){
  Hackathons.findAll({raw: true}).then((result) => {
      res.render('homepage', {result: result, featured1: result[0], featured2: result[1], featured3 : result[2]});
      //res.json({msg: "This is wht shows: " + result[0].id});
    })
    .catch(error =>{
      console.log('Error:', error);
    });
  

  //var x = Hackathons.findAll({where: {id: 1,},raw:true}).then(function(result) { return result;})
  //res.render(path.join(__dirname,'../public','mainPage/homepage.html'), {data: x});
  //res.render('homepage', { user: x[0] , example:'test' });
});

router.get('/hackathonsadd', function(req,res){
  res.render('hackathonsadd');
});

router.get('/homepage',function(req,res){
  res.sendFile(path.join(__dirname,'../public','mainPage/homepage.html'));
});


module.exports = router;