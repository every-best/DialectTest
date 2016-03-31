import express from "express"
import Category from "./../models/Category"

const Router = express.Router();

Router.use(function(req,res,next){
    //TODO
    next();
});

Router.get("/list",function(req,res){
    Category.find().exec(function(err,categories){
        if(err){
            res.state(500).end();
        }
        res.send(categories);
    })
});

Router.post("/add",function(req,res){
    var category = {
        name:req.query.title,
        gradeText:[req.query.gradeA,req.query.gradeB,req.query.gradeC]
    };
    Category.create(category,function(err,category){
        if(err){
            res.state(500).end();
        }
        res.send({code:200});
    });
});

Router.post("/:cid/update",function(req,res){
    var cid = req.params.cid;
    var categoryObj = {
        name:req.query.name,
        gradeText:[req.query.gradeA,req.query.gradeB,req.query.gradeC]
    };
    Category.findOneAndUpdate({categoryId:cid},categoryObj,null,function(err,category){
        if(err){
            res.state(500).end();
        }
        res.send({code:200});
    });
});

Router.post("/:cid/remove",function(req,res){
    var cid = req.params.cid;
    var categoryObj = {
        name:req.query.name,
        gradeText:[req.query.gradeA,req.query.gradeB,req.query.gradeC]
    };
    Category.findOneAndUpdate({categoryId:cid},categoryObj,null,function(err,category){
        if(err){
            res.state(500).end();
        }
        res.send({code:200});
    });
});
module.exports = Router;