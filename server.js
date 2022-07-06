const routes = require('./controllers/');
const sequelize = require('./config/connection');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 7121;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// handlebars app template set up
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const sess = {
  // session variables go here
};
// app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//turn on routes
app.use(routes);
app.use(require('./controllers/'));

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
