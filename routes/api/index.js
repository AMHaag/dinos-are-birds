const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const highScoreRoutes = require('./highscore-routes.js');

router.use('/users', userRoutes);
routes.use('/scores');

module.exports = router;
