import React from "react"
import classNames from 'classnames'
function Progress(answerResults,total){
    var aCount = [],aHtml = [];
    var preIsRight = null,count=0;
    answerResults.forEach((answer,nIndex)=>{
        if(preIsRight === null){
            preIsRight = answer.isRight;
        }
        if(preIsRight != answer.isRight){
            aCount.push({
                isRight:preIsRight,
                count:count
            });
            count = 1;
        }else{
            count++;
        }
        preIsRight = answer.isRight;
    });
    aCount.push({
        isRight:preIsRight,
        count:count
    });
    aCount.forEach((oCount,nIndex) =>{
        var sHtml = null;
        var classname = classNames({
            "progress-bar":true,
            "progress-bar-success":oCount.isRight,
            "progress-bar-danger":!oCount.isRight
        });
        var sWidth = ((oCount.count+0.0)/total)*100+"%";
        var sText = oCount.count+(oCount.isRight?"正确":"错误");
        sHtml = (<div className={classname} style={{"width":sWidth}} key={nIndex}>
            <span className="sr-only">{sText}</span>
        </div>);
        aHtml.push(sHtml);
    });

    if(aHtml.length>0){
        return (<div className="progress">
                    {aHtml}
                </div>);
    }else{
        return null;
    }
}

function htmlEntinties(str){
    if(arguments.length === 0){
        return '';
    }
    var oReCodeChars = {
        '&':'amp',
        '<':'lt',
        '>':'gt',
        '"':'quot',
        ' ':'nbsp',
    };


    return str.replace(/[<>&" ]/g,function(sMatch){
       return '&'+ oReCodeChars[sMatch] + ';' ;
    });
}

function dangerouseHtml(str){
    return {__html:str};
}

class Question extends React.Component{
    constructor(props){
        super(props);
        this._convertEnmu = {
          0:'A',
            1:'B',
            2:'C',
            3:'D'
        };
    }
    rawMarkup(){
        return {__html:this.props.question.title.replace("https","http")};
    }
    convertAnswer(nIndex){
        return this._convertEnmu[nIndex];
    }

    choose(index){
        const{question,onChoose} = this.props;
        $("h2.page-header").click();
        onChoose(question._id,this.convertAnswer(index));
    }

    render(){
        const {onChoose,answerResults,question,total} = this.props;
        return (<section className="container">
                    {Progress(answerResults,total)}
                    <div className="testContainer">
                        <h2 className="page-header" dangerouslySetInnerHTML={this.rawMarkup()}></h2>
                        <div className="list-group">
                            {question.choose.map((chooseItem,nIndex)=>{
                                return <a className="list-group-item" onClick={this.choose.bind(this,nIndex)} key = {nIndex}>
                                            {this.convertAnswer(nIndex)}.{chooseItem}
                                        </a>;
                            })}
                        </div>
                    </div>
                </section>);
    }
}

export default Question;