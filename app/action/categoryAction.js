import Flux from "../Flux"

class CategoryAction{
    constructor(){
        this.generateActions('getCategoryListSuccess','getCategoryListFail','addCategorySuccess','addCategroyFail');
    }

    getCategory(){
        let url = "/api/category/list";
        $.ajax({url:url})
        .done((data) => {
                this.actions.getCategoryListSuccess(data);
            })
        .fail((jqXhr) => {
                this.actions.getCategoryListFail(jqXhr);
            })
    }

    addCategory(oParams){
        $.post("/api/category/add",oParams)
            .done(function(data){
                this.actions.addCategorySuccess(data);
            }.bind(this))
            .fail((jqXhr) => {
                this.actions.addCategroyFail(jqXhr);
            });
    }
}

export default Flux.createActions(CategoryAction)