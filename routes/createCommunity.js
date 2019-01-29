const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get('/createCommunity',(req, res)=>{
    res.render('createCommunity',{
        pageTitle: "Create a Community",
        isLoggedIn: false,
        pageType: "createCommunity"
    })
})

module.exports = router;