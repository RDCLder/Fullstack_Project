// Dependencies
const express = require("express");
const app = express();
const db = require('./models/')


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static("public"));
app.use(require("./routes/index"));
app.use(require("./routes/community"));
app.use(require("./routes/login"));
app.use(require("./routes/register"));
app.use(require("./routes/logout"));
app.use(require("./routes/authenticate"));
app.use(require("./routes/user"));
<<<<<<< HEAD
=======

>>>>>>> 919a3c515c1acc2a5c6f927905520a52a6874a20
// db.sequelize.migrate;
// db.sequelize.drop();
// db.sequelize.sync();

// app.post('/login/ajax', passport.authenticate('local-login'));

// app.post('/login', passport.authenticate('local-login', {
//     successRedirect : '/',
//     failureRedirect : '/',
//     failureFlash : true
// }));

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})