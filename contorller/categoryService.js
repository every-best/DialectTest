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
        res.send({code:200,result:categories});
    })
});

Router.post("/add",function(req,res){
    var category = {
        name:req.body.name,
        desc:req.body.desc,
        gradeText:[req.body.gradeA,req.body.gradeB,req.body.gradeC]
    };
    Category.create(category,function(err,category){
        if(err){
            res.send({code:500,err:err.message});
        }
        res.send({code:200,result:category});
    });
});

Router.post("/:cid/update",function(req,res){
    var cid = req.params.cid;
    var categoryObj = new Category({
        name:req.body.name,
        gradeText:[req.body.gradeA,req.body.gradeB,req.body.gradeC]
    });
    Category.findOneAndUpdate({categoryId:cid},categoryObj,null,function(err,category){
        if(err){
            res.status(500).send(err.message);
        }
        res.send({code:200});
    });
});

Router.post("/:cid/remove",function(req,res){
    var cid = req.params.cid;
    Category.findOneAndUpdate({categoryId:cid},categoryObj,null,function(err,category){
        if(err){
            res.status(500).send(err.message);
        }
        res.send({code:200});
    });
});
module.exports = Router;