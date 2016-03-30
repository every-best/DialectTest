import React from "react"
import Top5 from "./Top5"
export class Footer extends React.Component{
    render(){
        return (<footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-5">
                                <h3>i am footer ,top555/h3>
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