const express = require ('express');
const router = express.Router();
const bcrypt = require ('bcrypt');
const User = require ('./../models/user');

router.route('/')
    .get((req, res)=>{
        res.render('login')
    })
    .post((req, res)=>{
       const username = req.body.username;
       const password = req.body.password;

       User.findOne({email: username}, (err, foundUser)=>{
           if (err){
               console.log(err)
           }else {
               if (foundUser) {
                   bcrypt.compare(password, foundUser.password, function (error, result) {
                       if(result === true){
                           res.render('secrets')
                       }

                   })
               }
           }
       })

    })





















module.exports = router;