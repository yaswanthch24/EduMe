var express = require('express');
var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;

var deleted = express.Router().delete("/:Id", function (req, res) {
    let userId = parseInt(req.params.Id);
    mongoclient.connect("mongodb://localhost:27017/Project", (err, db) => {
        if (err) throw err;
        else {
            db.collection("StudentDetails").deleteOne({ "userId": userId }, (err, data) => {
                if (err) throw err;
                else {
                    res.send("data deleted");
                }
            })
        }
        db.close();
    })
})

module.exports = deleted