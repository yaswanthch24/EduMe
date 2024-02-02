var express = require('express');
var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;

var login = express.Router().get("/:emailId/:password", function (req, res) {
    mongoclient.connect("mongodb://localhost:27017/Project", (err, db) => {
        let emailId = req.params.emailId;
        let password = req.params.password;
        if (err)
            throw err;
        else {
            db.collection("StudentDetails").findOne({ "emailId": emailId, "password": password }, (err, data) => {
                if (err)
                    throw err;
                else {
                    res.send(data);
                }
            })
        }
    })
})
module.exports = login;