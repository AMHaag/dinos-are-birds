const router = require('express').Router();
const { HighScore } = require('../../models');

//get all scores
router.get('/', (req, res) => {
  HighScore.findAll()
    .then((dbHighScoreData) => res.json(dbHighScoreData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get top n scores
router.get('/top/:count', (req, res) => {
  let count = parseInt(req.params.count);
  console.dir(count);
  HighScore.findAll({ order: [['score', 'DESC']], limit: count })
    .then((topHighScoreData) => res.json(topHighScoreData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get all scores by user_id
router.get('/:id', (req, res) => {
  HighScore.findAll({
    where: { user_id: req.params.id },
    order: [['score', 'DESC']],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//post new score
router.post('/', (req, res) => {
  HighScore.create({
    score: req.body.score,
    user_id: req.body.user_id,
  })
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
