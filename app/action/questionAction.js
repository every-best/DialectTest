import Flux from "../flux"

class QuestionAction{
    constructor(){
        this.generateActions("getQuestionListSuccess","getQuestionListFail","getQuestionAnswerSuccess","getQuestionAnswerFail","addQuestionSuccess","addQuestionFail");
    }

    getQuestionList(cid){
        let url = "/api/question/list/"+cid
        $.get(url)
            .done((data) => {
                this.actions.getQuestionListSuccess(data);
            })
            .fail((jqXhr) => {
                this.actions.getQuestionListSuccess(jqXhr);
            })
    }

    addQuestion(cid,oParams){
        let url = "/api/question/add/"+cid
        $.post(url,oParams)
        .done((data) => {
            this.actions.addQuestionSuccess(data);
        })
        .fail((jqXhr) => {
            this.actions.addQuestionFail(jqXhr);
        })
    }

    getQuestionAnswer(qid,answer,oParams){
        let url = "/api/question/getAnswer/"+qid;
        var oParams = oParams || {};
        oParams.answer = answer;
        $.post(url,oParams)
        .done((data) =>{
                this.actions.getQuestionAnswerSuccess(data);
            })
        .fail((jqXhr) => {
                this.actions.getQuestionAnswerFail(jqXhr);
            });
    }

}

export default Flux.createActions(QuestionAction)