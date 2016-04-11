import Flux from "../flux"
import QuestionAction from "../action/questionAction"

class QuestionListStore{
    constructor(){
        this.bindActions(QuestionAction);
        this.questions = [];
        this.answerResults = [];
    }

    onGetQuestionListSuccess(data){
        this.questions = data.result;
        this.answerResults = [];
    }
    onGetQuestionListFail(jqXhr){
        toastr.error(jqXhr.responseJSON.message);
    }

    onGetQuestionAnswerSuccess(data){
        this.answerResults.push(data.result);
    }
    onGetQuestionAnswerFail(jqXhr){
        toastr.error(jqXhr.responseJSON.message);
    }

    onAddQuestionSuccess(data){
        this.questions.push(data.result);
    }
    onAddQuestionFail(jqXhr){
        toastr.error(jqXhr.responseJSON.message);
    }

    onRemoveQuestionSuccess(data){
        var nIndex = null;
        this.questions.map((question,index) =>{
            if(question._id == data.result._id){
                nIndex = index;
            }
        });
        if(nIndex != null){
            this.questions.splice(nIndex,1);
        }
    }
    onRemoveQuestionFail(jqXhr){
        toastr.error(jqXhr.responseJSON.message);
    }
}
export default Flux.createStore(QuestionListStore)