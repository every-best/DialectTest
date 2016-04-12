import React from "react"
import {Link} from "react-router"

class Nav extends React.Component{
    render(){
        //<li><Link to="/AddCategory">加个方言</Link></li>
        // <img src="" width="" alt className="logo"/>
        return(
            <header>
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                |我是logo|
                            </a>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/About">关于</Link></li>
                                <li><Link to="/Category">方言</Link></li>
                                <li><Link to="/User">炮哥</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Nav;