import express from "express"
import Category from "./../models/Category"
import Question from "./../models/Question"
import RandomM from  "./../util/randomM"

const Router = express.Router();

Router.use(function(req,res,next){
    next();
});

Router.get("/list/:cid",function(req,res){
    const {cid} = req.params.cid;
    function filter(questions){
        return questions.map(function(question){
                    const {title,choose}= question;
                    return {"title":title,"choose":choose};
                });
    }
    Category.findOne({_id:cid},function(err,category){
        if(err){
            res.status(500).end();
        }
        Question.find({category:category},function(err,questionList){
            if(err){
                res.status(500).end();
            }
            if(questionList.length>10){
                //随机挑选10个
                res.send(filter(RandomM(questionList)));
            }else{
                res.send(filter(questionList));
            }
        });
    });
});

Router.post("/add/:cid",function(req,res){
    const {cid} = req.params.cid;
    Category.findOne({_id:cid},function(err,category){
        if(err){
            res.status(500).end();
        }
        if(category){
            var oBj = {
                category:category,
                title:req.body.title,
                choose:[req.body.chooseA,req.body.chooseB,req.body.chooseC,req.body.chooseD],
                answer:req.body.answer
            }
            Question.create(oBj,function(err,question){
                if(err){
                    res.send({code:500});
                }
                res.send({code:200});
            });
        }
    });
})

module.exports = Router;