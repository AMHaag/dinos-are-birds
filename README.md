# dinos-are-birds

## Database information
### Setting up the server locally
  - open the mysql schell and run `source db/schema.sql`
  - create a .env file in the root directory with these fields in it:
    - DB_NAME='dinos_are_birds'
    - DB_USER='*your mysql username*'
    - DB_PASSWORD='*your mysql password*'
  - run `npm start` from the root to launch the server
  - run `npm stop` to stop the server if you need to relaunch
  > *note that .env files are in the .gitignore to prevent leakign your personal mysql password.*

### Local Host Port
The local host port is set to 7121

### API endpoints

**User**
- get all users `./api/users`
- get single user `./api/users/1`
- put user `./api/users/1`
- delete user `./api/users/1`
- login a user `./api/users/login`
- post new user `./api/users`
  - JSON expected:
```JSON
{"username":"string_min_3",
"email":"valid_email_string",
"password":"string_min_8",
"avatar_id":"integer"}
```

**HighScores**
