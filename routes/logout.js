let express = require('express');
let router = express.Router();


router.get('/logout', (req, res, next)=>{
    req.session.destroy((err) => {
        if(err) return next(err)

        req.logout();

        res.redirect('back');
        
    })
  })

module.exports = router;