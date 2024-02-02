var express  = require('express');
var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
let fetch = express.Router().get("/",(req,res)=>{
    mongoclient.connect("mongodb://localhost:27017/Project", (err,db)=>{
        if(err)
            throw err;
        else{
            db.collection("StudentDetails").find({}).toArray((err, data)=>{
                if(err)
                    throw err;
                else{
                    res.send(data);
                }
            })
        }
    })
})

module.exports = fetch;
