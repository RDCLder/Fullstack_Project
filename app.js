// Dependencies
const express = require("express");
const app = express();
const db = require('./models/')


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static("public"));
app.use(require("./routes/index"));
app.use(require("./routes/community"));
<<<<<<< HEAD
app.use(require("./routes/login"));
app.use(require("./routes/register"));
app.use(require("./routes/logout"));
app.use(require("./routes/authenticate"))
=======
// app.use(require("./routes/login"));
// app.use(require("./routes/register"));

>>>>>>> 184f717ee94883acc7ad7301dcd2ccc4be78f733
// db.sequelize.migrate;
// db.sequelize.drop();
// db.sequelize.sync();

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})