const routes = require('./routes');
const sequelize = require('./config/connection');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 7121;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});
