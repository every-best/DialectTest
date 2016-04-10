import React from "react"
import {Link} from 'react-router'
import CategoryListStore from '../store/CategoryListStore';
import CategoryAction from '../action/CategoryAction';
import connectToStores from 'alt-utils/lib/connectToStores'

class Result extends React.Component{
    constructor(props){
        super(props);
       const{answer} = this.props.location.state;

        var uploadAnswer = answer.map(ans =>{
            return ans.isRight;
        });
        var oParams ={
            answers:uploadAnswer.join(",")
        }
        CategoryAction.getResult(this.props.params.cid,oParams);
    }
    static getStores(){
        return [CategoryListStore];
    }

    static getPropsFromStores(){
        return CategoryListStore.getState();
    }
    render(){
        const {cid} = this.props.params;
        const {name,grade,desc} = this.props.resultInfo;
        var sUrl = "/Question/"+cid;
        if(grade){
            return <section className="container">
                <div className="jumbotron resultContainer">
                    <h1>{grade}</h1>
                    <p>{desc}</p>
                    <p><Link className="btn btn-primary btn-lg" to = {sUrl} role="button">再试一次</Link></p>
                </div>
            </section>;
        }else{
            return null;
        }
    }
}

export default connectToStores(Result);