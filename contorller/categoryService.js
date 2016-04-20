import express from "express"
import Category from "./../models/category"

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
    const{name,desc,gradeA,gradeB,gradeC,uid,pwd} = req.body;
    var category = {
        name:name,
        desc:desc,
        gradeText:[gradeA,gradeB,gradeC]
    };
    //if(uid != "yzzhan" || pwd != "123456"){
    //    res.send({code:208,msg:"auth error"});
    //}
    Category.create(category,function(err,category){
        if(err){
            res.send({code:500,err:err.message});
        }
        res.send({code:200,result:category});
    });
});

Router.post("/update",function(req,res){
    var cid = req.query.cid;
    var categoryObj = new Category({
        name:req.body.name,
        gradeText:[req.body.gradeA,req.body.gradeB,req.body.gradeC]
    });
    Category.findOneAndUpdate({categoryId:cid},null,function(err,category){
        if(err){
            res.status(500).send(err.message);
        }
        res.send({code:200});
    });
});

Router.post("/remove",function(req,res){
    const {cid,uid,pwd} = req.body;
    //if(uid != "yzzhan" || pwd != "123456"){
    //    res.send({code:208,msg:"auth error"});
    //}
    Category.remove({_id:cid},function(err,category){
        if(err){
            res.status(500).send(err.message);
        }
        res.send({code:200,result:{_id:cid}});
    });
});

Router.post("/getResult/:cid",function(req,res){
   var answerResult = req.body.answers.split(",");
    if(!answerResult){
        res.send({code:204,err:"parameter error..."});
    }
   var rightAnswer = answerResult.filter((answer)=>{
       return answer;
   });
    var nRatio = (rightAnswer.length+0.0) / answerResult.length,nIndex;
    if(nRatio < 0.59){
        nIndex = 0;
    }else if(nRatio < 0.79){
        nIndex = 1;
    }else{
        nIndex = 2;
    }
    Category.findOne({_id:req.params.cid},function(err,category){
        if(err){
            res.send({code:500,err:err.message});
        }
        if(category){
            res.send({code:200,result:{
                grade:category.gradeText[nIndex],
                name:category.name,
                desc:category.desc,
                cid:category._id
            }});
        }else{
            res.send({code:500,err:"no category..."});
        }
    });
});
module.exports = Router;