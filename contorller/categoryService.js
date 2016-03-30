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

module.exports = Router;