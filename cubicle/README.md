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
