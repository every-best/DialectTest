var superagent = require("superagent");
var charset = require("superagent-charset");
charset(superagent);
var cheerio = require("cheerio");
var fs = require("fs");
var Q = require("q");
var cid = process.argv[2] || '570ca73555c4946b86c9a85b';

function getMovieQuestion(sUrl){
    var sUrl = sUrl || "https://movie.douban.com/top250";
    superagent.get(sUrl)
    .charset("utf-8")
       .end(function(err,res){
        if(err){
            console.error(err);
            return;
        }
        var $ = cheerio.load(res.text);
        var movieLinks = $(".article .grid_view .item .info .hd a");
        movieLinks.each(function(nIndex,movieLink){
            var sMoviewUrl = $(movieLink).attr("href");
            if(sMoviewUrl.startsWith("/")){
                sMoviewUrl = "http://movie.douban.com"+sMoviewUrl;
            }
            getQuestionItem(sMoviewUrl);
        })

    });
}

var sEmnu = {
    0:'A',
    1:'B',
    2:'C',
    3:'D'
}

function getQuestionItem(sUrl){
    superagent.get(sUrl)
        .charset("utf-8")
    .end(function(err,res){
        if(err){
            console.error(err);
            return;
        }
        var $ = cheerio.load(res.text);

        var aTitle = $($("#content h1 span[property='v:itemreviewed']")).text().trim();
        var sAnswer =aTitle.split(" ")[0];


        var imageUrl =$($("#content #related-pic ul li a")[4]).attr("href");

        var sActorLink = $($("#info .actor .attrs a")[0]).attr("href");
        if(sActorLink.startsWith("/")){
            sActorLink = "https://movie.douban.com"+sActorLink;
        }

        Q.all([
            (function(imageUrl){
                //获取标题
                var defer = Q.defer();
                superagent.get(imageUrl)
                    .charset("utf-8")
                    .end(function(err,res){
                        if(err){
                            console.error(err.url);
                            defer.reject(err);
                        }
                        var $ = cheerio.load(res.text);
                        var sImageUrl = $($("#content .article .photo-show .photo-wp .mainphoto img")[0]).attr("src");
                        var sPath = '/images/movie/'+new Date().getTime()+'.jpg';
                        downloadImage('/public'+sPath,sImageUrl);
                        var sTitle = "<img src='"+sPath+"'/>";
                        defer.resolve(sTitle);
                    });
                return defer.promise;
            })(imageUrl),
            (function(sActorLink){
                //获取其它三个选择
                var defer = Q.defer();
                superagent.get(sActorLink)
                    .charset("utf-8")
                    .end(function(err,res){
                        if(err){
                            console.error(err);
                            defer.reject(err);
                        }
                        var $ = cheerio.load(res.text);
                        var otherChooses = $("#content #best_movies ul li .info a").map((nIndex,element) =>{
                            return $(element).text();
                        });
                        defer.resolve(otherChooses);

                    });
                return defer.promise;
            })(sActorLink)
        ]).done(function(result){
            //处理数据
            var oParam = {};
            var chooses = {};
            var otherChooses = result[1];
            oParam.title = result[0];

            var answerIndex = Math.floor(Math.random()*4);
            chooses[answerIndex] = sAnswer;


            //将答案随机
            if(otherChooses.length > 4){
                var count = 0;
                for(var i = 0 ; i<otherChooses.length;i++){
                    var choose = otherChooses[i];
                    if(choose != sAnswer){
                        var nIndex =  Math.floor(Math.random()*4);
                        if(count < 3){
                            while(chooses[nIndex]){
                                if(nIndex >= 3){
                                    nIndex = 0;
                                }else{
                                    nIndex ++;
                                }
                            }
                            count++;
                            chooses[nIndex] = choose;
                        }else{
                            break;
                        }
                    }
                }
            }

            for(var key in chooses){
                oParam["choose"+sEmnu[key]] = chooses[key];
            }
            oParam.answer = sEmnu[answerIndex];

            superagent.post("http://webmail.danding.org:8003/api/question/add/"+cid)
                .send(oParam)
                .end(function(err,res){
                    if(err){
                        console.error(err);
                    }
                })
        });
    });
}

function downloadImage(sPath,sUrl){
    superagent.get(sUrl)
        .end(function(err, res) {
        fs.writeFileSync(process.cwd()+sPath, res.body);
        console.log('end!', sUrl)
    })
}

//getQuestionItem("https://movie.douban.com/subject/1292052/");
var count = 0;
var sInterval = setInterval(function(){
    if(count <= 9 ){
        var sUrl = "https://movie.douban.com/top250?start="+25*count;
        getMovieQuestion();
        count++;
    }else{
        clearInterval(sInterval);
    }
},3000);
//getMovieQuestion("https://movie.douban.com/top250");
//downloadImage("http://img3.doubanio.com/view/photo/photo/public/p507024461.jpg");