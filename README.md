# dinos-are-birds

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