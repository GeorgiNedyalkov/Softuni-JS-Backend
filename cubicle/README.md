# Cubicle

Cubicle is a place where you can learn about the most famous Rubik cubes.

- Install nodemon as a dev dependency.

Make a src folder

set up scripts in package.json:
start: node ./src/index.js
dev: nodemon ./src/index.js

start and test are default scripts. This is a shortcut.
npm start and npm test: npm run start, npm run test

1. Create the initial server

- add a configuration file for the port based on different environments: config.js

2. Set up express handlebars (A Handlebars view engine for Express):

- npm i express-handlebars
- import to script
- create an engine with an extention
- set the view engine to the extention
- set the proper folder
- add layouts
- main file
- set extname to hbs in the engine
- extract configuration logic to separate folder
- import it back in the app

3. Set up statis files

- css
- images
- handlebar views

4. Set up routes for action on different endpoints

- Extract controllers
- Create a model

  02.02.2023

- Add a mongoose database

## Working with JWT

- Install jwt and cookie-parser
- Where to build the token (service or controller). Better in service
- Build the token
- import jwt
- Create a payload
- Add secret to config file
- Sign with JWT, payload, secret and options
- import util and use promisify to turn them into promises

in controller:
set the cookie
