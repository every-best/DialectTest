import React from "react"
import Top5 from "./top5"
class Footer extends React.Component{
    render(){
        return (<footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-5">
                                <h3>i am footer ,top555</h3>
                                <p>hehehehehehheh....</p>
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                            <Top5/>
                        </div>
                    </div>
                </footer>);
    }
}

export default Footer;