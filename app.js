const express = require('express');

const exphbs = require('express-handlebars');

var path = require('path');

const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const models = require('./models');


app.use(express.static('public'));


app.engine('hbs', exphbs({extname: '.hbs', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Passport code taken from authentication.md from Edgardo
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



const controllers = require('./controllers/auth.js');
app.use(controllers);


models.sequelize.sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`)
    });
});