var express = require('express');
var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;

let register = express.Router().post("/", function (req, res) {
    mongoclient.connect("mongodb://localhost:27017/Project", (err, db) => {
        if (err)
            throw err;
        else {
            db.collection("StudentDetails").insertOne({
                "userName": req.body.userName,
                "age": req.body.age,
                "emailId": req.body.emailId,
                "education": req.body.education,
                "password": req.body.password
            }, (err, data) => {
                if (err)
                    throw err;
                else {
                    res.send("student registered");
                }
            })
        }
    })
})
module.exports = register;