const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;


//Passport code ttaken from authentication.md from Edgardo
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('./middlewares/auth');

//Passport Use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(expressSession(({
  secret: 'keyboard cat - REPLACE ME WITH A BETTER SECRET',
  resave: false,
  saveUninitialized: true,
})));

app.use(passport.initialize());
app.use(passport.session());


app.use(express.static('public'));
const controllers = require('./controllers/auth.js');
app.use(controllers);

app.listen(PORT, () => {
	console.log(`app is up and running on ${PORT}`);
});