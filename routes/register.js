let express = require('express');
let router = express.Router();
let db = require('./../models');
var bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

// router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/register', function(req, res) {
    res.render('register', {
        pageTitle: "Register"
    })
});

// router.get('/register', function(req, res) {
//     res.redirect("index", {
//         pageTitle: "Home",
//         pageID: "home"
//     })
// });

router.post('/register',function(req,res){

    // let username = req.body.username;
    console.log('username');
   
    // res.send(req.body.username);
    
    // hashing the password
    let password = bcrypt.hashSync(req.body.password,8);
    
    db.user.create({username: req.body.username, password: password, email: req.body.email})
    .then(() => {
        // success;
        res.redirect("/");
    })
    .catch(error => {
        // error;
    });
  
    //save to database
    
    
  });

module.exports = router;