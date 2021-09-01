const express = require ('express');
const router = express.Router();
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
                   if (foundUser.password ===password){
                       res.render('secrets')
                   }else {
                       console.log('Wrong pass')
                   }
               }
           }
       })

    })





















module.exports = router;