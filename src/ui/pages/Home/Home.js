import React from "react"
import img from "./logo.svg"
import {Link} from "react-router-dom"
import "./hoem.css"

class Home extends React.Component{
  render(){
    return(
      <div className="home">
        <div className="hero">
          <img src={img} className="app-logo" />
          {/*logo下面的标题 */}
          <h1 className="title">
            吮吸
          </h1>
            {/*口号*/}
          <p className="slogan">享受舌尖的艳遇</p>
        </div>

        <div className="actions">
          <Link to="/signup">注册</Link>
          <Link to="/login">登录</Link>
        </div>


      </div>
    )
  }
}
export default Home
