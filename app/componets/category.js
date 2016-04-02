import React from "react"
import {Link} from "react-router"
import CategoryListStore from '../store/CategoryListStore';
import CategoryAction from '../action/CategoryAction';
import AddCategory from './AddCategory';

function CategoryItem(props){
    var sCid = props._id;
    var sUrl = "/"+sCid+"/category";
    return (<div className="col-lg-3" key={sCid}>
                <img src="" className="img-circle"/>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <p>
                    <Link className="btn btn-default" to={sUrl} role="button">start >></Link>
                    <a className="btn btn-default" onClick={this.deleteCategory.bind(this,sCid)}> delete</a>
                </p>
            </div>);
}
class Category extends React.Component{
    //constructor(props){
    //    super(props);
    //    this.state = { categories:[]};
    //}
    //getData(){
    //    $.get("/api/category/list",function(result){
    //        if(result.code == 200){
    //            this.setState({categories:result.result});
    //        }
    //    }.bind(this));
    //}
    //componentDidMount(){
    //    this.getData();
    //}
    constructor(props){
        super(props);
        this.state = CategoryListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        CategoryListStore.listen(this.onChange);
        CategoryAction.getCategory(this.props.params);
    }

    componentWillUnmount(){
        CategoryListStore.unlisten(this.onChange);
    }
    onChange(state) {
        this.setState(state);
    }
    deleteCategory(cid){
        const oParam = {
            cid:cid
        };
        CategoryAction.removeCategory(oParam);
    }
    render(){
        if(!this.state.categories){
            return null;
        }
        return (<section className="container">
                    <div className="row">
                        {this.state.categories.map(CategoryItem.bind(this))}
                    </div>
                    <AddCategory/>
                </section>
                );
    }
}
export default Category;