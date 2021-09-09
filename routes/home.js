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

router.route('/submit')
    .get ((req, res)=>{
        if (req.isAuthenticated()){
            res.render('submit')
        }else {
            res.redirect ('/login');
        }
    })
    .post((req, res)=>{
        const submittedSecret = req.body.secret;

        User.findById(req.user.id, (err, foundUser)=>{
            if (err){
                console.log(err);
            }else {
                if(foundUser){
                    foundUser.secret = submittedSecret;
                    foundUser.save(()=>{
                        res.redirect('/secrets');
                    });
                }
            }
        })
    })



















module.exports = router;