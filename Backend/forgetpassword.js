var express = require('express');
var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient();

let UpdatePass = express.Router().put("/", (req, res) => {

    let emailId= (req.body.emailId);

    let user = {

        "password":req.body.password,
        
    }
    console.log(user);
    
    mongoclient.connect("mongodb://localhost:27017/Project", (err, db) => {
        if (err) {
            throw err;
        } else {
            console.log('Connection Established...');
            db.collection("StudentDetails").updateOne({"emailId":emailId}, { $set:user }, (err, info) => {
                if (err) {
                    throw err;
                } else {
                    console.log(info);
                    res.send({message: 'Record Updated Successfully...'});
                }
            });
        }
        db.close();
    });
    
});

module.exports = UpdatePass;