const express = require ('express');
const router = express.Router();
const User = require ('./../models/user');

router.get('/', (req, res)=>{
    if (req.isAuthenticated()) {
        res.render('secrets')
    }else {
        res.redirect ('/login');
    }

})
















module.exports = router;