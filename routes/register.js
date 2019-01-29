let express = require("express");
let router = express.Router();
let db = require("./../models");
var bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

// router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/register", function (req, res) {
    if (!req.isAuthenticated()) {
        res.render("register", {
            pageTitle: "Register"
        });
    } 
    else {
        res.redirect("/");
    }
});

router.post("/register", function (req, res) {
    
    let password = bcrypt.hashSync(req.body.password, 8);

    db.user
        .create({
            username: req.body.username,
            password: password,
            email: req.body.email
        })
        .then(() => {
            res.redirect("/login");
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;
