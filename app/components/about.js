import React from "react"
import {Link} from "react-router"
class About extends React.Component{
    render(){
        return <section className="container">
                    <div className="jumbotron resultContainer">
                        <h1>茶蛇爬</h1>
                        <p>一个宁到拿港里克恰拿,哈看见彪浪一条拿.哈又端起一碗腻拿,破得哦条拿身浪,哦得哦条拿,拿啊过拿! </p>
                        <p><Link className="btn btn-primary btn-lg" to="/" role="button">爬</Link></p>
                    </div>
                </section>;
    }
}
export default About;