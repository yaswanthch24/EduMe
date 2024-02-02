var express = require('express');

let home = express.Router().get("/" , function(req,res){
    res.send("<h1>Hi This is Home API.. URL: " + req.url + "<h1>");
});

module.exports = home;