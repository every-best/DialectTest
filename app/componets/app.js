import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
export class App extends React.Component{
    render(){
        return (
            <Nav/>
                {this.props.children}
            <Footer/>
        );
    }
}