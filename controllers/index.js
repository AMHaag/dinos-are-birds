const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

module.exports = router;
