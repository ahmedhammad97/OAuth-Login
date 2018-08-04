const router = require('express').Router();
const passport = require('passport');

//Home page
router.get('/', (req, res)=>{
  res.render('index');
});

//Profile page
router.get('/profile', (req, res)=>{
  res.render('profile', {'name' : req.params.name});
});

// auth with google+
router.get('/auth/google', passport.authenticate('google', {
  scope : ['profile']
}));

// auth with facebook
router.get('/auth/facebook', (req, res) => {
    // handle with passport
    res.send('logging in with Facebook');
});

router.get('/auth/google/redirect', (req, res)=>{
  res.send('you\'re now authenticated ;)');
})

module.exports = router;
