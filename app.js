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
  let url = `http://localhost:8000/api/events`;
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
          }
        }
      });

    res.render('pages/login',
        {
            testing: null,
            start: null,
            data: null,
        });

});

app.get('/search', function(req,res)
{
  res.render('pages/search');
});


app.get('/event', function(req,res)
{
    res.render('pages/event',
        {
            eventInformation: null,
            teamEvent: null,
        });
});

app.get('/event/:id', function(req,res)
{
    let id = req.params.id;
    let url = `http://localhost:8000/api/events/${id}`;
    let urlTeamEvent = `http://localhost:8000/api/teamevent/event/${id}`
    const promises = [];


    //Get the information for the event.
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

    //Find the list of teams for the event.
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

    Promise.all(promises).then(function(listOfResolvedResults)
    {
        let listOfTeamNames = [];

        for(let x = 0; x < listOfResolvedResults[1].length;x++)
        {
            console.log(listOfResolvedResults[1][x].team.teamName);
            listOfTeamNames[x] = listOfResolvedResults[1][x].team.teamName;
        }

        console.log("LIST OF NAME:")
        console.log(listOfTeamNames);

        res.render('pages/event',
          {
            eventInformation: listOfResolvedResults[0],
            teamEvent: listOfTeamNames,
          })
    });
});

app.post('/createTeam', function(req,res) {

  let eventID = req.body.eventID;
  let title = req.body.teamName;
  let url = `http://localhost:8000/api/teamevent`;
  var teamResult;


  const promises = [];

    promises.push(new Promise(function(resolve,reject)
    {
       request.post({url:'http://localhost:8000/api/teams', form: {teamID:eventID, teamName:req.body.teamName}}, function(err,response,body)
        {
          if(err)
          {
            console.log("Error on create Team request at: " + url2);

          }
          else
          {
            console.log("Created Team!");
            let teamResult = JSON.parse(body);
            console.log(teamResult);
            resolve(teamResult);

          }
        });
    }));


    Promise.all(promises).then(function(createTeamResults)
        {
         console.log("What is this" + createTeamResults[0].id);
         let resultteamID = createTeamResults[0].id;
         const secondPromises = [];
         secondPromises.push(new Promise(function(resolve,reject)
            {
              request.post({url, form: {eventID:eventID, title:title, teamID:resultteamID}}, function(err,response,body)
                {
                  if(err)
                    {
                      console.log("Error on request for second promise: " + url);

                    }
                  else
                    {
                      let teameventResult = JSON.parse(body);
                      console.log("Teamresult:" + teameventResult);
                      console.log("Success on second promise")
                      resolve(teameventResult);
                      //res.redirect('/event/' + eventID);

                    }
                });
            }));

            Promise.all(secondPromises).then(function(listOfResolvedResults)
              {
                console.log("Second Promises");
                console.log("Resulting team ID:" + createTeamResults[0].id);
                res.redirect('/event/' + eventID);
              });
    });
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
      res.render('pages/index', {eventslist: null, testing: null, error: 'Error, please try again'});
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
                eventslist: null,
                testing: null,
                start: 1,
                data: null,
            });
      }
      else
      {
        res.render('pages/index',
            {
                eventslist: null,
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

app.get('/account', function(req,res) {
  res.render('pages/account');
});

app.get('/account/:id', function(req,res) {
    let userID = req.params.id;
    let urlUser = `http://localhost:8000/api/users/${userID}`;
    let urlTeams = `http://localhost:8000/api/teamuser/user/${userID}`
    const promises = [];


    //Get the information for the event.
    promises.push(new Promise(function(resolve,reject)
    {
      request(urlUser, function(err,response,body)
      {
        console.log("URL FOR FIRST PROMISE:" + urlUser);
        if(err)
        {
          console.log("Error on request: " + urlUser);
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
            console.log("First Promise Results:");
            console.log(searchResult);
            resolve(searchResult);
          }
        }
      });
    }));

    //Find the list of teams for the event.
    promises.push(new Promise(function(resolve,reject)
    {
      request(urlTeams, function(err,response,body)
      {
        console.log("URL FOR THE SECOND PROMISE:" + urlTeams);
        if(err)
        {
          console.log("Error on request: " + urlTeams);
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
            console.log("Second Promise Results:");
            console.log(teamResult);
            resolve(teamResult);
          }
        }
      });
    }));


    let userData;
    let listTeamNames = [];
    let listTeamIDs = [];

    Promise.all(promises).then(function(listOfResolvedResults)
    {
        let listOfTeamNames = [];
        let listOfTeamIDs = [];

        for(let x = 0; x < listOfResolvedResults[1].length;x++)
        {
            console.log(listOfResolvedResults[1][x].team.teamName);
            listOfTeamNames[x] = listOfResolvedResults[1][x].team.teamName;
            listOfTeamIDs[x] = listOfResolvedResults[1][x].team.id;
        }

        console.log("LIST OF NAME:")
        console.log(listOfTeamNames);

        let userData = listOfResolvedResults[0];
        let listTeamNames = listOfTeamNames;
        let listTeamIDs = listOfTeamIDs;

        console.log("Testing Variables:  userData");
        console.log(userData);

        console.log("listTeamNames");
        console.log(listTeamNames);

        console.log("listofTeamIDs");
        console.log(listTeamIDs);

        let secondPromises = [];
        let urlEvents = `http://localhost:8000/api/teamevent/team/`;
        let urlEventsFinal;


        console.log("Loop below:");
        for(let x = 0; x < listTeamIDs.length; x++)
        {
          console.log("here are listTeamIDs");
          console.log(listTeamIDs[x]);
          urlEventsFinal = urlEvents + listTeamIDs[x];

          console.log(urlEventsFinal);

          secondPromises.push(new Promise(function(resolve, reject)
          {
            request(urlEventsFinal, function(err,response,body)
            {
              if(err)
              {
                console.log("Error on request" + urlEventsFinal);
                reject(err);
              }
              else
              {
                console.log("Request Made!");
                let resultevents = JSON.parse(body);

                if(resultevents == undefined)
                {
                  console.log("Undefined search result");
                }
                else if(resultevents.length == 0)
                {
                  console.log("Search result is empty");
                }
                else
                {
                  console.log(resultevents);
                  resolve(resultevents);
                }

              }
            });
          }));


        }

        Promise.all(secondPromises).then(function(listOfResolvedResults)
        {
          let eventNames = [];
          let eventIDs = [];
          console.log("List of resolved results below:");
          console.log(listOfResolvedResults);
          for(let a = 0; a < listOfResolvedResults[0].length; a++)
          {
            eventNames[a] = listOfResolvedResults[0][a].event.eventName;
            eventIDs[a] = listOfResolvedResults[0][a].event.id;
          }

          //Console log for testing purposes
          /*
          console.log(eventNames);
          console.log(userData);
          console.log(listTeamNames);
          console.log(eventNames);
          console.log(eventIDs);
          */

          res.render('pages/account',
          {
            userData: userData,
            teamNames: listTeamNames,
            eventNames: eventNames,
            eventIDs: eventIDs,
          })
        });



        /*

        promises.push(new Promise(function(resolve,reject)
          {
            request(urlUser, function(err,response,body)
            {
              console.log("URL FOR FIRST PROMISE:" + urlUser);
              if(err)
              {
                console.log("Error on request: " + urlUser);
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
                  console.log("First Promise Results:");
                  console.log(searchResult);
                  resolve(searchResult);
                }
              }
            });
          }));*/


    });


  //res.render('pages/account');
});

app.get('/index', function(req,res) {
  let url = `http://localhost:8000/api/events`;
  let events = [];
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
            let events = searchResult;

            console.log("below is events");
             console.log(events);
             res.render('pages/index',
                  {
                      eventslist: events,
                      testing: null,
                      start: null,
                      data: null,
                  });

          }
        }
      });

});

app.post('/index', function(req,res) {
   res.render('pages/index',
        {
           eventslist: null,
            testing: null,
            start: null,
            data: null,
        });
});

app.get('/event', function(req,res)
{
    res.render('pages/event',
        {
            eventInformation: null,
            teamEvent: null,
        });

    console.log(req.body);
});


// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to HACKATHON HUB.',
}));

module.exports = app;