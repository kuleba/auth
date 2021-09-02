const express = require ('express');
const router = express.Router();
const bcrypt = require ('bcrypt');
const User = require ('./../models/user');
const saltRounds = 10;


router.route('/')
    .get((req, res)=>{
    res.render('register')
})
    .post((req, res)=>{

        bcrypt.hash(req.body.password, saltRounds, function (err, hash){

            const newUser = new User ({
                email: req.body.username,
                password: hash
            });
            newUser.save(err=>{
                if(!err){
                    console.log('User register success');
                    res.render('secrets');
                }else{
                    console.log(err)
                }
            })
        })


    })





















module.exports = router;