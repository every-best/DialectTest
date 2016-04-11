import Flux from "../flux"

class CategoryAction{
    constructor(){
        var actions = ['getCategoryListSuccess',
            'getCategoryListFail',
            'addCategorySuccess',
            'addCategroyFail',
            'removeCategorySuccess',
            'removeCategoryFail',
            'getResultSuccess',
            'getResultFail'];
        this.generateActions(...actions);
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

    removeCategory(oParams){
        $.post("/api/category/remove",oParams)
            .done(function(data){
                this.actions.removeCategorySuccess(data);
            }.bind(this))
            .fail((jqXhr) => {
                this.actions.removeCategroyFail(jqXhr);
            });
    }

    getResult(cid,oParam){
        $.post("/api/category/getResult/"+cid,oParam)
            .done(function(data){
                this.actions.getResultSuccess(data);
            }.bind(this))
            .fail((jqXhr) => {
                this.actions.getResultFail(jqXhr);
            });
    }
}

export default Flux.createActions(CategoryAction)