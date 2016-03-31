import React from "react"
function CategoryItem(props){
    return <div className="col-lg-4">
                <img src="" className="img-circle"/>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <p>
                    <Link className="btn btn-default" to="/category" role="button">start >></Link>
                </p>
            </div>;
}
class Category extends React.Component{
    render(){
        if(!this.props.categories){
            return null;
        }
        return (
            <div className="row">
                {this.props.categories.map(CategoryItem)}
            </div>
        );
    }
}
export default Category;