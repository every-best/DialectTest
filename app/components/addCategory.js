import React from "react"
import CategoryListStore from '../store/categoryListStore';
import CategoryAction from '../action/categoryAction';

class AddCategory extends React.Component{
    constructor(props){
        super(props);
    }
    submit(){
        const oParams = {
            name:this.refs.name.value,
            desc:this.refs.desc.value,
            gradeA:this.refs.gradeA.value,
            gradeB:this.refs.gradeB.value,
            gradeC:this.refs.gradeC.value
        };
        CategoryAction.addCategory(oParams);
    }
    //如果是es6开发方式，需要自己bind this
    render(){
        return (<section className="row">
                    <div className="form-add-category">
                        <h2 className="form-add-category-heading">加个方言</h2>
                        <label for="name" className="sr-only">名称</label>
                        <input type="text" id="name" name="name" className="form-control form-control-first" placeholder="名称" required autofocus ref="name"/>
                        <label for="desc" className="sr-only">描述</label>
                        <input type="text" id="desc" name="desc" className="form-control" placeholder="描述" required autofocus ref="desc"/>
                        <label for="gradeA" className="sr-only">A等级</label>
                        <input type="text" id="gradeA" name="gradeA" className="form-control" placeholder="A等级" required  ref="gradeA"/>
                        <label for="gradeB" className="sr-only">B等级</label>
                        <input type="text" id="gradeB" name="gradeB" className="form-control" placeholder="B等级" required  ref="gradeB"/>
                        <label for="gradeC" className="sr-only">C等级</label>
                        <input type="text" id="gradeC" name="gradeC" className="form-control form-control-last" placeholder="C等级" required  ref="gradeC"/>
                        <button className="btn btn-lg btn-primary btn-block" onClick={this.submit.bind(this)}>加个晒</button>
                    </div>
                </section>);
    }
}

export default AddCategory;