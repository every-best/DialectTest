import React from "react"
function CategoryItem(props){
    return <div class="col-lg-4">
                <img src="" class="img-circle"/>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <p>
                    <a class="btn btn-default" href="#" role="button"> 进入比赛 》</a>
                </p>
            </div>;
}
export class Category extends React.Component{
    render(){
        return (
            <div class="row">
                {this.props.categories.map(CategoryItem)}
            </div>
        );
    }
}