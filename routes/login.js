const express = require("express");
const router = express.Router();
const db = require("./../models");
const LocalStrategy = require("passport-local").Strategy
const passport = require("passport");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-Parser");
const bodyParser = require("body-parser");
const session = require("express-session");
//const Sequelize = require("sequelize");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

var myStore = new SequelizeStore({
    db: db.sequelize
});
router.use(session({
    secret: "keyboard cat",
    store: myStore,
    resave: false,
    proxy: true
}));
myStore.sync();

router.use(passport.initialize());
router.use(passport.session());

router.get("/login", (req, res) => {
    res.render("/login", {
        pageTitle: "Login",
        pageID: "login"
    });
});

router.post("/login",
    passport.authenticate("local", {
        successRedirect: "back",
        failureRedirect: "/login",
        failureFlash: true
    })
);

passport.use(new LocalStrategy((username, password, done) => {
    db.user.findAll({ where: { username: username } }).then((results) => {

        if (results != null) {
            const data = results[0];
            bcrypt.compare(password, data.password, function (err, res) {
                if (res) {
                    done(null, { id: data.id, username: data.username })
                } else {
                    done(null, false)
                }
            })
        } 
        else {
            done(null, false)
        }
    })
}));

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    db.user.findById(parseInt(id, 10)).then((data) => {
        done(null, data)
    })
});

module.exports = router;