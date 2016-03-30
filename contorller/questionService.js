import express from "express"
import Question from "./../models/Question"
import RandomM from  "./../util/randomM"

const Router = express.Router();

Router.use(function(req,res,next){
    next();
});

Router.get("/list/:cid",function(req,res){
    const {cid} = req.params;
    function filter(questions){
        return questions.map(function(question){
                    const {title,choose}= question;
                    return {"title":title,"choose":choose};
                });
    }
    Question.find({category:cid}).exec(function(err,questionList){
        if(questionList.length>10){
            //随机挑选10个
            res.send(filter(RandomM(questionList)));
        }else{
            res.send(filter(questionList));
        }
    });
});

module.exports = Router;