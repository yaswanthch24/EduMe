var express = require('express');
var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;

let update = express.Router().put("/",function( req , res ){
    mongoclient.connect("mongodb://localhost:27017/Project",(err,db) =>{
        if(err)
        throw err;
        else{
            db.collection("StudentDetails").updateOne({"userId": req.body.userId},{$set:{
                "userName":req.body.userName, "age":req.body.age, "emaiId":req.body.emaiId,
                "education":req.body.education, "password":req.body.password}
            },(err,data)=>{
                if(err)
                throw err;
            else{
                res.send("detailes updated");
            }
            })
        }
    })
})
module.exports = update;
