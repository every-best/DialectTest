import React from "react"
import {Link} from "react-router"
import CategoryListStore from '../store/CategoryListStore';
import CategoryAction from '../action/CategoryAction';
import AddCategory from './AddCategory';

function CategoryItem(props){
    var sUrl = "/"+props._id+"/category";
    return (<div className="col-lg-3" key={props._id}>
                <img src="" className="img-circle"/>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <p>
                    <Link className="btn btn-default" to={sUrl} role="button">start >></Link>
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

    render(){
        if(!this.state.categories){
            return null;
        }
        return (<section className="container">
                    <div className="row">
                        {this.state.categories.map(CategoryItem)}
                    </div>
                    <AddCategory />
                </section>
                );
    }
}
export default Category;