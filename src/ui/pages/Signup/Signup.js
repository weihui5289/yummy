import React from "react"
import TitleHeader from "../../shared/TitleHeader/TitleHeader"
import "./signup.css"
import {Link} from "react-router-dom"
import axios from "axios"
import Settings from "../../../Setting"
import store from "../../../store"

class Signup extends React.Component{
  signup=(e)=>{
    e.preventDefault()
    let username = this.username.value
    let password =this.password.value
    let email =this.email.value
    let agin=this.agin.value
    let data={username,password,email,agin}
    axios.post(`${Settings.host}/user/signup`, data).then( res => {
    //  console.log(res.data)

     if(res.data.username){
       store.dispatch({type:"ADD_USER",username:res.data.username})
       localStorage.setItem("userId",res.data.userId)
       this.resForm.reset()
       this.props.history.push("/sider")
      }
    })
  }


  render(){
    return(
      <div className="signup">
         <TitleHeader title="signup" />
         <div className="signup-content">
           <div className="signup-hero" >
             <h1 className="signup-hero-title">
               注册
             </h1>
             <p className="slogan">
               连接小而确定的幸福
             </p>
           </div>
           <form className="signup-form" onSubmit={this.signup} ref={value=>this.resForm=value}>
              <div className="signup-text-inputs">
                <div className="signup-text-inputs-inner">
                  <input ref={xxx=>this.username=xxx} type="text" placeholder="用户名" />
                  <input ref={xxx=>this.email=xxx} type="text" placeholder="Email" />
                  <input ref={xxx=>this.password=xxx} type="password" placeholder="password" />
                  <input ref={xxx=>this.agin=xxx} type="password" placeholder="再输一遍" />
                </div>
              </div>
              <div className="signup-actions">
                <button type="submit">注册</button>
              </div>
            </form>
            <div className="signup-other-option">
              <Link to="/login">已有账号？直接登录</Link>
            </div>
          </div>
        </div>

    )
  }
}
export default Signup
