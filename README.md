# Running the program
Before running the program, you will need to run the following to persists the model to the database:
```
sequelize db:migrate
```

To run the program, you can use the following command:
```
npm run start:dev
```

# Installing Dependencies

The bootstrap and ejs libraries are required for the frontend:
```
npm install --save ejs -g
npm install bootstrap
```
The express, sequelize, and request libraries are required for the backend:
```
npm install --save express body-parser morgan
npm install --save sequelize pg pg-hstore
npm install --save request
```


# Program Structure
```
HackathonHub
├── app.js                            
├── bin
│   └── www
├── package.json
└── server
    ├── config                    * Configuration files - change this to change database setup, etc.
    │   └── config.json
    ├── controllers               * Controllers - used to access the database and change values.
    ├── migrations                * Migration Files - used to setup the database
    ├── models                    * Models - contains the files for the model's properties
    ├── routes                    * Routes - contains the api calls syntax
    └── seeders
