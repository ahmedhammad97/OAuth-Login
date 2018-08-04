const router = require('express').Router();
const passport = require('passport');

//Home page
router.get('/', (req, res)=>{
  res.render('index');
});

//Profile page
router.get('/profile/:name', (req, res)=>{
  res.render('profile', {'name' : req.params.name});
});

// auth with google+
router.get('/auth/google', passport.authenticate('google', {
  scope : ['profile']
}));

// auth with facebook
router.get('/auth/facebook', passport.authenticate('facebook', {
  scope : ['read_stream']
}));

router.get('/auth/google/redirect', passport.authenticate('google'), (req, res)=>{
  res.redirect(`/profile/${req.user}`);
})

router.get('/auth/facebook/redirect', passport.authenticate('facebook'), (req, res)=>{
  res.redirect(`/profile/${req.user}`);
})

module.exports = router;
