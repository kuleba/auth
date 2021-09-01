//jshint esversion:6
require('dotenv').config();
const express = require ('express');
const ejs = require ('ejs');
const path = require ('path');
const mongoose = require ('mongoose');
const encrypt = require ('mongoose-encryption');

const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');

const app = express();

app.use(express.static('public'));
app.set('views', ('views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);



app.use(function(req, res, next) {
    next(createError(404));
});
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});














app.listen(3000, function () {
    console.log('Server is running on port 3000')
})


module.exports = app;