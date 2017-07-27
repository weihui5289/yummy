import React from "react"
import TitleHeader from "../../shared/TitleHeader/TitleHeader"
import "./login.css"
import {Link} from "react-router-dom"
import Settings from "../../../Setting"
import axios from "axios"

class Login extends React.Component{
  login=(e)=>{
    e.preventDefault()
    let username = this.username.value
    let password =this.password.value
    let data={username,password}
    axios.post(`${Settings.host}/user/login`, data).then( res => {
     console.log(res.data)
    this.props.history.push("/dashboard")
    })
    .catch(err=>{
      console.log(err.response.data.msg)
      
    })
  }

  render(){
    return(
      <div className="login">
         <TitleHeader title="login" />
         <div className="login-content">
           <div className="login-hero" >
             <h1 className="login-hero-title">
               登录
             </h1>
             <p className="slogan">
               连接一个个小而确定的幸福
             </p>
           </div>
           <form className="login-form" onSubmit={this.login} ref={value=>this.resForm=value}>
              <div className="login-text-inputs">
                <div className="login-text-inputs-inner">
                  <input ref={xxx=>this.username=xxx} type="text" placeholder="用户名" />
                  <input ref={xxx=>this.password=xxx} type="password" placeholder="password" />
                </div>
              </div>
              <div className="login-actions">
                <button type="submit">登录</button>
              </div>
            </form>
            <div className="login-other-option">
              <Link to="/signup">没有账号？请先注册</Link>
            </div>
          </div>
        </div>

    )
  }
}
export default Login
