import React from "react"
import {Link} from "react-router"

export class Nav extends React.Component{
    render(){
        return(
            <header>
                <nav class="navbar navbar-default" role="navigation">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="/">
                                <img src="" width="" alt class="logo"/>
                            </a>
                        </div>
                        <div class="navbar-collapse collapse">
                            <ul class="nav navbar-nav navbar-right">
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Category">Category</Link></li>
                                <li><Link to="/User">User</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}