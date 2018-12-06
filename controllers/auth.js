const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth');

const router = express.Router();
const User = models.User;
const Hackathons = models.Hackathons;

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
      res.render('homepage', {result: result});
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