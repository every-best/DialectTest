import React from "react"
class Result extends React.Component{
    render(){
        return <section className="container">
            <div className="jumbotron resultContainer">
                <h1>nice job!</h1>
                <p>amazing...</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">show other</a></p>
            </div>
        </section>;
    }
}

export default  Result;