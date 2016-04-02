import React from "react"
import {Link} from "react-router"
class Index extends React.Component{
    render(){
        return <section className="container">
                    <div className="starter">
                        <h1>想杂个说就杂个说</h1>
                        <p className="lead">叽里呱啦,bla bla.....</p>
                        <Link className="btn btn-primary btn-log" to="/Category" role="button">start >></Link>
                    </div>
                </section>;
    }
}
export default Index;