const router = require('express').Router();
const HighScore = require('../../models');

//get all scores
router.get('/', (req, res) => {
  HighScore.findAll()
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get top 100 scores
router.get('/top', (req, res) => {});

//get all scores by user_id
router.get('/:id', (req, res) => {
      HighScore.findAll({where:{user_id:req.params.id}})
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
