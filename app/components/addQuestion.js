import React from "react"
import QuestionAction from '../action/QuestionAction';

class AddQuestion extends React.Component{
    constructor(props){
        super(props);
    }
    submit(){
        if(this.refs.title.value != null){
            const oParams = {
                title:this.refs.title.value,
                chooseA:this.refs.chooseA.value,
                chooseB:this.refs.chooseB.value,
                chooseC:this.refs.chooseC.value,
                chooseD:this.refs.chooseD.value,
                answer:this.refs.answer.value,
            };
            QuestionAction.addQuestion(this.props.params.cid,oParams);
        }
    }
    //如果是es6开发方式，需要自己bind this
    render(){
        return (<section className="row">
            <div className="form-add-category">
                <h2 className="form-add-category-heading">加个题目</h2>
                <label htmlFor="title" className="sr-only">题目</label>
                <input type="text" id="title" name="title" className="form-control form-control-first" placeholder="题目" required autofocus ref="title"/>
                <label htmlFor="chooseA" className="sr-only">选择A</label>
                <input type="text" id="chooseA" name="chooseA" className="form-control" placeholder="选择A" required autofocus ref="chooseA"/>
                <label htmlFor="chooseB" className="sr-only">选择B</label>
                <input type="text" id="chooseB" name="chooseB" className="form-control" placeholder="选择B" required  ref="chooseB"/>
                <label htmlFor="chooseC" className="sr-only">选择C</label>
                <input type="text" id="chooseC" name="chooseC" className="form-control" placeholder="选择C" required  ref="chooseC"/>
                <label htmlFor="chooseD" className="sr-only">选择D</label>
                <input type="text" id="chooseD" name="chooseD" className="form-control" placeholder="选择D" required  ref="chooseD"/>
                <label htmlFor="answer" className="sr-only">答案</label>
                <input type="text" id="answer" name="answer" className="form-control form-control-last" placeholder="答案" required  ref="answer"/>
                <button className="btn btn-lg btn-primary btn-block" onClick={this.submit.bind(this)}>加个晒</button>
            </div>
        </section>);
    }
}

export default AddQuestion;