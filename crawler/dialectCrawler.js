//cid 56fd586674e362942395a5d6 粤语
var superagent = require("superagent");
var charset = require("superagent-charset");
charset(superagent);
var cheerio = require("cheerio");

function getYueYuQuestion(sUrl){
    var sEmnu = {
        0:'A',
        1:'B',
        2:'C',
        3:'D'
    }
    superagent.get(sUrl)
        .charset("gb2312")
    .end(function(err,res){
        if(err){
            console.error(err);
        }
        var $ = cheerio.load(res.text);
        var oParam = {};
            oParam.title =  $($("p[align='center']")[0]).text();
        $("label").each(function(nIndex,element){
           var sChoose = sEmnu[nIndex];
            if(nIndex >= 4){
                return ;
            }
            oParam["choose"+sChoose] = $(element).text().trim();
        });
       //正确答案
            var sRegEx = /\u6b63\u786e\u7b54\u6848\u662f\uff1a([A-Z])/;
            if(sRegEx.test(res.text)){
                oParam["answer"] = RegExp.$1;
            }
         if(oParam["answer"]){
             superagent.post("http://localhost:3000/api/question/add/57090af52c8a5e401694dafe")
             .send(oParam)
             .end(function(err,res){
                     if(err){
                         console.error(err);
                     }
                    console.info(res.text);
                 })
         }
    });
}

for(var i = 1;i < 9 ; i++){
    var sUrl = "http://www.yueyuge.cn/ceshi/"+i+".html";
    getYueYuQuestion(sUrl);
}
