const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;


  sequelize = new Sequelize(
    'mysql://root:eD5QTawbYbccfkbFCeiP@containers-us-west-37.railway.app:7648/railway'
  );

// const Sequelize = require('sequelize');

// require('dotenv').config();

// // create connection to our db

module.exports = sequelize;
