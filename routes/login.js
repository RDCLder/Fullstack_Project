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

// Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router.use(flash());

var myStore = new SequelizeStore({
    db: db.sequelize
});
router.use(session({
    secret: "keyboard cat",
    store: myStore,
    // saveUninitialized: true,
    resave: false,
    proxy: true
}));
myStore.sync();

router.use(passport.initialize());
router.use(passport.session());

router.get('/login', function (req, res) {

    if (!req.isAuthenticated()) {
        res.render('login', {
            pageTitle: "Login",
            pageId: "login"
        });
    }
    else {
        res.redirect("/");
    }
});

// router.get('/login', (req, res) => {
//     res.redirect('login',{
//         pageTitle: "Login",
//         pageId: "login"
//     }); //end of res.send
// });//end of app.get

router.post('/login',
    passport.authenticate('local', {
        successRedirect: "/user",
        failureRedirect: "/",
        failureFlash: true,
        successFlash: 'Welcome!'
    })
);

passport.use(new LocalStrategy((username, password, done) => {
    db.user.findAll({ where: { username: username } }).then((results) => {
        console.log(results);
        if (results.length > 0) {
            const data = results[0];
            bcrypt.compare(password, data.password, function (err, res) {
                if (res) {
                    console.log("Response received");
                    done(null, { id: data.id, username: data.username });
                }
                else {
                    console.log("Returned nothing");
                    done(null, false)
                }
            })
        }
        else {
            console.log("Result is null");
            done(null, false)
        }
    })
}));

passport.serializeUser((user, done) => {
    console.log(`${user.username} is serialized`)
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    console.log(`User is deserialized`)
    db.user.findById(parseInt(id, 10)).then((data) => {
        done(null, data)
    })
});

module.exports = router;