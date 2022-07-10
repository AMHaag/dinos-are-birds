const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', { loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  console.log(req.session);
  res.render('login');
});

router.get('/dashboard', (req, res) => {
  res.render('highscore', { loggedIn: req.session.loggedIn });
});

router.get('/gameover', (req, res) => {
  res.render('gameover', { loggedIn: req.session.loggedIn });
});

router.get('/profile', (req, res) => {
  res.render('user-profile', { loggedIn: req.session.loggedIn });
});

router.get('/game', (req, res) => {
  res.render('game', { loggedIn: req.session.loggedIn });
});

// router.get('/',(req,res)=>{})
// router.get('/',(req,res)=>{})

module.exports = router;
