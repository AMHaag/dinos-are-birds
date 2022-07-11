# dinos-are-birds

## About
A game where you play as a bird, or a character of choice, and run and jump over cacti! It allows you to log in and save your high scores, view other people's high scores, and do multiplayer.

## Technologies
* mySQL
* HTML
* SASS / CSS
* Javascript
* node.js
* express.js

## Links
* Deployed application: http://www.dinos-are-birds.fun/

## Contributors
* Aaron Haag: https://github.com/AMHaag
* Pina Gomet: https://github.com/pgomet
* Sarah King: https://github.com/negativeh0ll0w
* Michael Zelaya: https://github.com/Vertis-Z

## Database information
### Setting up the server locally
  - be sure you already installed all packages using `node install`
  - create a .env file in the root directory with these fields in it:
    - DB_NAME='dinos_are_birds'
    - DB_USER='*your mysql username*'
    - DB_PASSWORD='*your mysql password*'
  - run `npm run start` from the root to launch the server
  - run `npm run kill` to stop the server (must be stopped before relaunching)
  - run `npm run test_seeds` while the server is running if you'd like to populate testing data in the user and highscore tables  
  > **note** *that .env files are in the .gitignore to prevent leaking your personal mysql root password.*  
  > **note** *the test_seeds script adds 6 users and 100 highscores assigned to those 6 users*  
  > **note** *that currently everytime you start the server locally it first erases all tables currently*  
### Local Host Port
The local host port is set to 7121

## Table of Contents
- Profiles
- High Scores
- Contact Us
- Login

## User Stories
1. As a user I want to navigate through the webpage and know more about the game
2. As a user I want to navigate through the high score board
3. As a user I want to be able to contact the creators of the game
4. As a user I want to be directed to the game through the webpage

## The Challenge
- Use Node.js and Express.js to create a RESTful API
- Use Handlebars.js as a template engine
- For database, use MySQL and Sequelize ORM
- Must have both GET and POST routes
- Must be deployed using Heroku
- At least one new technology, package or library
- Must have a polished UI, be responsive, and interactive (buttons must work)
- A folder structure that meets MVC paradigm
- Has authentication
- Protect API keys as well as sensitive information

## The Development Process
In order to complete the challenge, the following had to be done:
1. Understand what the project's main concept and requirements were
2. Define the concept and purpose of the project
3. Brain storm possible project ideas
4. Define each team member's roles
5. Create the game databases
6. Push 'sketches' into each coordinated branch (handlebars, HTML, CSS, SASS, etc.)
7. Integrate application into Heroku
8. Final review and proper documentation

### API endpoints

#### **User**
`./api/users`
- **get**: returns entire users table as JSON
- **post**: accepts JSON to create new user
  - expected format: 
```JSON
{"username":"string_min_3",
"email":"valid_email_string",
"password":"string_min_8",
"avatar_id":"integer"}
```
`./api/users/n`
- **get**: returns a single user's information (except password hash)
- **put**:accepts JSON to update a field of that user's row
- **delete**: deletes this user from the table

`./api/users/login`
- **post**:takes a username and password, hashes the password and then checks if it matches. 

#### **HighScores**
`./api/scores`
- **get**: returns entire highscores table, not sorted  
- **post**: accepts JSON to create new highscore   
  - expected format: `{"score":"9999","user_id":"2"}`

`./api/scores/n`
- **get**:returns all scores for a single user where *n= their user_id*, it will always return them already ordered from highest to lowest.   


`./api/scores/top/n`
- **get**: returns the top n scores from highest to lowest