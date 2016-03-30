import React from "react"

function Progress(props){
    return (<div class="progress">
                <div class="progress-bar progress-bar-success" style="width: 35%">
                    <span class="sr-only">35% Complete (success)</span>
                </div>
                <div class="progress-bar progress-bar-danger" style="width: 10%">
                    <span class="sr-only">10% Complete (danger)</span>
                </div>
            </div>);
}

function ChooseItem(props,nIndex){
    //list-group-item-success list-group-item-dange
    return (<button type="button"  class="list-group-item" onClick={this.choose}>
                {nIndex+1}.{props.text}
            </button>);
}
class Question extends React.Component{

    choose(evt){
        //TODO 选择操作
    }
    render(){
        return (<section className="container">
                    <div className="progress">
                        {Progress(props)}
                    </div>
                    <div className="testContainer">
                        <h2 className="page-header"> {this.props.title}</h2>
                        <div className="list-group">
                            {this.props.chooses.map(ChooseItem)}
                        </div>
                    </div>
                </section>);
    }
}

export default Question;