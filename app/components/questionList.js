import React from 'react'
import Question from './question'
import QuestionListStore from '../store/questionListStore'
import QuestionAction from '../action/questionAction'
import connectToStores from 'alt-utils/lib/connectToStores'

class QuestionList extends React.Component{
    constructor(props){
        super(props);
        this._cid = this.props.params.cid;
        this.state = {
            currentIndex:0
        };
    }
    static getStores(){
        return [QuestionListStore];
    }

    static getPropsFromStores(){
        return QuestionListStore.getState();
    }
    componentDidMount(){
        QuestionAction.getQuestionList(this._cid);
    }
    componentDidUnmount(){
        this.setState({currentIndex:0});
    }
    onChoose(qid,answer){
        QuestionAction.getQuestionAnswer(qid,answer,{cid:this._cid});
        const {questions,answerResults} = this.props;
        if(this.state.currentIndex >= questions.length-1){
            //TODO goto Result
            var sUrl = '/Result/'+this._cid;
            this.props.history.push({
                pathname:sUrl,
                state: {answer:answerResults}
            });
        }else{
            this.setState({currentIndex:++this.state.currentIndex});
        }
    }

    render(){
        const {questions,answerResults} = this.props;

        let {length:total} = questions;

        if(questions && total>0 && this.state.currentIndex < total){

            let question = questions[this.state.currentIndex];
            return (<Question question={question} answerResults={answerResults} total={total} onChoose={this.onChoose.bind(this)}/>);
        }else if(questions.length == 0){
            return (<p className="row">没有题目</p>)
        }else if(this.state.currentIndex >= total){
            return null;
        }
    }
}

export default connectToStores(QuestionList);