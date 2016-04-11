import Flux from "../flux"
import CategoryAction from "../action/categoryAction"

class CategoryListStore{
    constructor(){
        this.bindActions(CategoryAction);
        this.categories = [];
        this.resultInfo = {};
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
    onAddCategoryFail(jqXhr){
        toastr.error(jqXhr.responseJSON.message);
    }

    onRemoveCategorySuccess(data){
        var nIndex = null;
        this.categories.map((category,index) =>{
            if(category._id == data.result._id){
                nIndex = index;
            }
        });
        if(nIndex != null){
            this.categories.splice(nIndex,1);
        }
    }
    onRemoveCategoryFail(jqXhr){
        toastr.error(jqXhr.responseJSON.message);
    }

    onGetResultSuccess(data){
        this.resultInfo = data.result;
    }

    onGetResultFail(jqXhr){
        toastr.error(jqXhr.responseJSON.message);
    }
}
export default Flux.createStore(CategoryListStore)