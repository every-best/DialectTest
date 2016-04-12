import React from "react"
import {Link} from "react-router"
import CategoryListStore from '../store/categoryListStore';
import CategoryAction from '../action/categoryAction';
import AddCategory from './addCategory';

function CategoryItem(props){
    var sCid = props._id;
    var sUrl = "/Question/"+sCid;
    var sUrl2 = "/AddQuestion/"+sCid;

    //<Link className="btn btn-default" to={sUrl2} role="button">add >></Link>
    //<a className="btn btn-default" onClick={this.deleteCategory.bind(this,sCid)}> delete >></a>
    return (<div className="col-lg-3" key={sCid}>
                <img src="" className="img-circle"/>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <p>
                    <Link className="btn btn-default" to={sUrl} role="button">start >></Link>
                </p>
            </div>);
}
class Category extends React.Component{
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
        //  <AddCategory/>
        return (<section className="container">
                    <div className="row">
                        {this.state.categories.map(CategoryItem.bind(this))}
                    </div>
                </section>
                );
    }
}
export default Category;