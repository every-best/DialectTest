import Flux from "../Flux"
import CategoryAction from "../action/CategoryAction"

class CategoryListStore{
    constructor(){
        this.bindActions(CategoryAction);
        this.categories = []
    }

    onGetCategoryListSuccess(data){
        this.categories = data.result;
    }
    onGetCategoryListFail(jqXhr){
        toastr.error(jqXhr.responseJSON.message);
    }

    onAddCategorySuccess(data){
        this.categories.push(data.result);
    }
    addCategoryFail(jqXhr){
        toastr.error(jqXhr.responseJSON.message);
    }
}
export default Flux.createStore(CategoryListStore)