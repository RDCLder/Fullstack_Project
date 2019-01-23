const express = require("express");
const app = express();
const db = require('./models/')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static("public"));
app.use(require("./routes/index"));
app.use(require("./routes/community"))

// db.sequelize.migrate;
// db.sequelize.drop();
// db.sequelize.sync();

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})