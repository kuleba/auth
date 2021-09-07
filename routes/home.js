const express = require ('express');
const router = express.Router();
const User = require ('./../models/user');
const passport = require ('passport');

router.get('/', (req, res)=>{
    res.render('home')
});

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));
router.get('/auth/google/secrets',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/secrets');
    });
















module.exports = router;