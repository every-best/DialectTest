import Flux from "../Flux"
import QuestionAction from "../action/QuestionAction"

class QuestionListStore{
    constructor(){
        this.bindActions(QuestionAction);
        this.questions = []
    }

    onGetQuestionListSuccess(data){
        this.questions = data.result;
    }
    onGetQuestionListFail(jqXhr){
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