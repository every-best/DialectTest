import Flux from "./Flux"

class QuestionAction{
    constructor(){
        this.generatorActions("getQuestionListSuccess","getQuestionListFail","addQuestionSuccess","addQuestionFail");
    }

    getQuestionList(oParams){
        let url = "/api/question/list/"+oParams.cid
        $.get(url)
            .done((data) => {
                this.actions.getQuestionListSuccess(data);
            })
            .fail((jqXhr) => {
                this.actions.getQuestionListSuccess(jqXhr);
            })
    }

    addQuestion(cid,oParams){
        let url = "/api/question/add/"+oParams.cid
        $.post(url,oParams)
        .done((data) => {
            this.actions.addQuestionSuccess(data);
        })
        .fail((jqXhr) => {
            this.actions.addQuestionFail(jqXhr);
        })
    }

}

export default Flux.createActions(QuestionAction)