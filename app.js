const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const request = require('request');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Render the pages:
app.set('view engine','ejs');

// index page
app.get('/', function(req, res)
{
    res.render('pages/index',
        {
            testing: null,
            eventName: null,
            timeStart: null,
            timeEnd: null,
            eventAddress: null,
            eventCity: null,
            eventZip: null
        });
});

app.get('/test', function(req, res)
{
    res.render('pages/test');
});

app.post('/searchreq', function (req, res)
{
  let event = req.body.eventName;
  let url = `http://localhost:8000/api/events/searchevent/${event}`;
  console.log(req.body.eventName);

  request(url, function (err, response, body)
  {
    if(err)
    {
        console.log("Error on request: " + url);
      res.render('pages/index', {testing: null, error: 'Error, please try again'});
    }
    else
    {
     console.log("Request made!");
      let searchResult = JSON.parse(body)

      console.log(searchResult);
      if(searchResult == undefined)
      {
        console.log("Undefined Main of search result.");
        res.render('pages/index', {testing: null, error: 'Error, please try again'});
      } else
      {
        let eventName = searchResult.eventName;
        let timeStart = searchResult.timeStart;
        let timeEnd = searchResult.timeEnd;
        let eventAddress = searchResult.eventAddress;
        let eventCity = searchResult.eventCity;
        let eventZip = searchResult.eventZip;

        res.render('pages/index',
            {
                testing:{},
                error: null,
                eventName: eventName,
                timeStart: timeStart,
                timeEnd: timeEnd,
                eventAddress:eventAddress,
                eventCity: eventCity,
                eventZip: eventZip
            });
      }
    }
  });
})

// about page
app.get('/about', function(req, res)
{
    res.render('pages/about');
});



// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to HACKATHON HUB.',
}));

module.exports = app;