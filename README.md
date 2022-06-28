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