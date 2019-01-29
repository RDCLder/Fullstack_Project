const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get('/createCommunity',(req, res)=>{
    res.render('createCommunity',{
        pageTitle: "Create Community",
        isLoggedIn: false
    })
})

module.exports = router;