const express = require("express");
const router = express.Router();
const db = require("./../models/");
const LocalStrategy = require("passport-local").Strategy
const passport = require("passport");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-Parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require('connect-flash');
const SequelizeStore = require("connect-session-sequelize")(session.Store);

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/authenticate', function(req, res) {

    res.render('authenticate', {
        pageTitle: "Authentication"
    })
});

router.post('/authenticate',function(req,res){

    // let username = req.body.username;
    console.log('username');
   
    // res.send(req.body.username);
    
    // hashing the password
    let password = bcrypt.hashSync(req.body.password,8);
    
    db.user.create({username: req.body.username, password: password, email: req.body.email})
    .then(() => {
        // success;
        res.redirect('/back');
    })
    .catch(error => {
        // error;
    });
  
    //save to database
    
    
  });

module.exports = router;