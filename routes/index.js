var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send("gp");
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
})

module.exports = router;