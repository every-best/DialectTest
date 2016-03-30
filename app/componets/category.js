import React from "react"
function CategoryItem(props){
    return <div className="col-lg-4">
                <img src="" className="img-circle"/>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <p>
                    <a className="btn btn-default" href="#" role="button">start >></a>
                </p>
            </div>;
}
class Category extends React.Component{
    render(){
        return (
            <div className="row">
                {this.props.categories.map(CategoryItem)}
            </div>
        );
    }
}
export default Category;