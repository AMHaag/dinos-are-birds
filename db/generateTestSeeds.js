const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models/User');
const seeds = require('../db/seeds.js');

function addSeeds(queryString) {
  sequelize.query(queryString, { raw: false }).then((results) => {
    console.log(results);
  });
}

addSeeds(seeds.userSeeds);
addSeeds(seeds.scoreSeeds);
