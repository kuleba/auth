const express = require ('express');
const router = express.Router();
const User = require ('./../models/user');

router.get('/', (req, res)=>{
   User.find ({'secret': {$ne: null}}, (err, usersWithSecrets)=>{
       if(err){
           console.log(err)
       }else {
           res.render('secrets', {usersWithSecrets: usersWithSecrets})
       }
   })

});
















module.exports = router;