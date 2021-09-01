const express = require ('express');
const router = express.Router();
const md5 = require ('md5');
const User = require ('./../models/user');


router.route('/')
    .get((req, res)=>{
    res.render('register')
})
    .post((req, res)=>{
        const newUser = new User ({
            email: req.body.username,
            password: md5(req.body.password)
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





















module.exports = router;