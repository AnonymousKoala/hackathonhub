const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const request = require('request');

// Set up the express app
const app = express();

app.use(express.static( "public" ));

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
            start: null,
            data: null,
        });
});

//**REMOVE**
app.get('/event', function(req,res)
{
    res.render('pages/event');

    console.log(req.body);
});

app.get('/event/:id', function(req,res)
{
    let id = req.params.id;
    let url = `http://localhost:8000/api/events/${id}`;
    let urlTeamEvent = `http://localhost:8000/api/teamevent/event=${id}`
    const promises = [];

    promises.push(new Promise(function(resolve,reject)
    {
      request(url, function(err,response,body)
      {
        console.log("URL FOR FIRST PROMISE:" + url);
        if(err)
        {
          console.log("Error on request: " + url);
          reject(err);
        }
        else
        {
          let searchResult = JSON.parse(body);

          if(searchResult == undefined)
          {
            console.log("Undefined Main of search result.");
          }
          else if(searchResult.length == 0)
          {
            console.log("Search result is empty");
          }
          else
          {
            console.log(searchResult);
            resolve(searchResult);
          }
        }
      });
    }));

    promises.push(new Promise(function(resolve,reject)
    {
      request(urlTeamEvent, function(err,response,body)
      {
        console.log("URL FOR THE SECOND PROMISE:" + urlTeamEvent);
        if(err)
        {
          console.log("Error on request: " + url);
          reject(err);
        }
        else
        {
          console.log("Request made!");
          let teamResult = JSON.parse(body);

          if(teamResult == undefined)
          {
            console.log("Undefined Main of search result.");;
          }
          else if(teamResult.length == 0)
          {
            console.log("Search result is empty");
          }
          else
          {
            console.log(teamResult);
            resolve(teamResult);
          }
        }
      });
    }));

    let eventInformationTemp = [];
    let listOfTeams = [];
    let team;


    Promise.all(promises).then(function(listOfResolvedResults)
    {
        eventInformationTemp = listOfResolvedResults[0];

        for(let i = 0; i < listOfResolvedResults[1].length; i++)
        {
            listOfTeams[i] = listOfResolvedResults[1][i].teamID;
        }

        console.log("List of Teams:" + listOfTeams);

        const secondPromises = [];
        let urlTeam = 'http://localhost:8000/api/teams/';
        let finalUrlTeam;

        console.log("Length of list of teams:" + listOfTeams.length);

        for(let x = 0; x < listOfTeams.length; x++)
        {
            console.log("Enterred the second Promise.")
            finalUrlTeam = urlTeam + listOfTeams[x];
            console.log(finalUrlTeam);

            secondPromises.push(new Promise(function(resolve,reject)
            {
              request(finalUrlTeam, function(err,response,body)
              {
                if(err)
                {
                  console.log("Error on request: " + url);
                  reject(err);
                }
                else
                {
                  console.log("Request made!");
                  let teams = JSON.parse(body);

                  if(teams == undefined)
                  {
                    console.log("Undefined Main of search result.");;
                  }
                  else if(teams.length == 0)
                  {
                    console.log("Search result is empty");
                  }
                  else
                  {
                    console.log(teams);
                    resolve(teams);
                  }
                }
              });
            }));
        }

        Promise.all(secondPromises).then(function(listOfResolvedResults)
        {
            let teamNames = [];
            console.log(listOfResolvedResults);
            for(let a = 0; a < listOfResolvedResults.length; a++)
            {
                teamNames[a] = listOfResolvedResults[a].teamName;
            }

            console.log(teamNames);

          res.render('pages/event',
          {
            eventInformation: eventInformationTemp,
            teamEvent: listOfResolvedResults,
          })
        });
    });

});

app.post('/createTeam', function(req,res) {

  let eventID = req.body.eventID;
  let createID = req.body.createID;
  let title = req.body.teamName;

//Just letting teamID be eventID as a placeholder, as we need to implement team create here too, need to figure out how to pass to it afterwards
  let teamID = req.body.eventID;
  let url = `http://localhost:8000/api/teamevent`;

//Insert teamID when testing
  request.post({url, form: {eventID:eventID, title:title, teamID:teamID}}, function(err,response,body)
    {
      if(err)
      {
        console.log("Error on request: " + url);
      }
      else
      {
        console.log("Nice");
      }
    });



  res.redirect('/event/' + eventID);
});

app.post('/searchreq', function (req, res)
{
  let event = req.body.eventName;
  let url = `http://localhost:8000/api/events/searchevent/${event}`;
  console.log("Search term inputted:" + req.body.eventName);

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
      }
      else if(searchResult.length == 0)
      {
        console.log("Search result is empty");
        res.render('pages/index',
            {
                testing: null,
                start: 1,
                data: null,
            });
      }
      else
      {
        res.render('pages/index',
            {
                testing:{},
                start: 1,
                data: searchResult,
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