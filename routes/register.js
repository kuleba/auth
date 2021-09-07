const express = require ('express');
const router = express.Router();
const User = require ('./../models/user');
const passport = require ('passport');
const passportLocalMongoose = require ('passport-local-mongoose');



router.route('/')
    .get((req, res)=>{
    res.render('register')
})
    .post((req, res)=>{
    User.register({username: req.body.username}, req.body.password, function (err, user) {
        if (err){
            console.log(err);
            res.redirect('/')
        }else {
            passport.authenticate('local')(req, res,function () {
                res.redirect('/secrets')
            })
        }

    })



    });























module.exports = router;