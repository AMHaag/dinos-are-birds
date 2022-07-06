const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  console.log(req.session);
  res.render('login');
});

router.get('/dashboard', (req, res) => {
  res.render('highscore');
});

router.get('/gameover', (req, res) => {
  res.render('gameover');
});

router.get('/profile', (req, res) => {
  res.render('user-profile');
});

router.get('/game', (req, res) => {
  res.render('game');
});

// router.get('/',(req,res)=>{})
// router.get('/',(req,res)=>{})

module.exports = router;
