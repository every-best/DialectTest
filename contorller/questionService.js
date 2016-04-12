import express from "express"
import Category from "./../models/category"
import Question from "./../models/question"
import RandomM from  "./../util/randomM"

const Router = express.Router();

Router.use(function(req,res,next){
    next();
});

Router.get("/list/:cid",function(req,res){
    const {cid} = req.params;
    function filter(questions){
        return questions.map((question) => {
                   var rQuestion = question;
                    delete rQuestion.answer;
                    return rQuestion;
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
                var sNewQuestionList = RandomM(questionList,10);
                res.send({code:200,result:filter(sNewQuestionList)});
            }else{
                res.send({code:200,result:filter(questionList)});
            }
        });
    });
});

Router.get("/get/:nid",function(req,res){
    const {nid} = req.params;
    Question.findOne({_id:nid},function(err,question){
        if(err){
            res.status(500).end();
        }
        var rQuestion ;
        Object.assign(rQuestion,question);
        delete rQuestion.answer;
        res.send({code:200,result:rQuestion});
    });
});

Router.post("/getAnswer/:qid",function(req,res){
    let uAnswer = req.body.answer;
    if(uAnswer == null){
        res.send({code:204,msg:"parameter error..."});
    }
    const {qid} = req.params;
    Question.findOne({_id:qid},function(err,question){
        if(err){
            res.status(500).end();
        }
        const {answer} = question;
        if(answer == uAnswer){
            res.send({code:200,result:{isRight:true,qid:qid}});
        }else{
            res.send({code:200,result:{isRight:false,qid:qid}});
        }
    });
});

Router.post("/add/:cid",function(req,res){
    const {cid} = req.params;
    console.log(cid);
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
        }else{
            res.send({code:204,msg:"no category."});
        }
    });
});

module.exports = Router;