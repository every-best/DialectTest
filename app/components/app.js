import React from "react"
import Nav from "./nav"
import Footer from "./footer"
class App extends React.Component{
    render(){
        return (<div>
                    <Nav/>
                        {this.props.children}

                 </div>);
    }
}
export default App;