// Dependencies
const express = require("express");
const app = express();
const db = require('./models/')


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static("public"));
app.use(require("./routes/index"));
app.use(require("./routes/community"));
app.use(require("./routes/topic"));
app.use(require("./routes/login"));
app.use(require("./routes/register"));
app.use(require("./routes/logout"));
app.use(require("./routes/authenticate"));
app.use(require("./routes/user"));

app.use((req, res) => {
    
    if (!req.isAuthenticated()) { 
        var isLoggedIn = true;
        console.log("NOT AUTHENTICATED!");
    }
    else {
        var isLoggedIn = false;
        console.log("AUTHENTICATED!");
    }

    if (req.accepts("html")) {
        res.render("404", {
            pageTitle: "404",
            pageID: "404",
            url: req.url,
            isLoggedIn: isLoggedIn
        });
        return;
    }
    if (req.accepts("json")) {
        res.render("404", {
            pageTitle: "404",
            pageID: "404",
            url: req.url,
            isLoggedIn: isLoggedIn
        });
        return;
    }
    res.type("txt").send("Not Found");
});

// db.sequelize.migrate;
// db.sequelize.drop();
// db.sequelize.sync();

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})