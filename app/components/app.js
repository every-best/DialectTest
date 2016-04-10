import React from "react"
import Nav from "./nav"
import Footer from "./Footer"
class App extends React.Component{
    render(){
        return (<div>
                    <Nav/>
                        {this.props.children}
                     <Footer/>
                 </div>);
    }
}
export default App;