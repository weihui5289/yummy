import React from "react"
import {Link} from "react-router-dom"
import {slide as Menu } from 'react-burger-menu'
import "./siderbar.css"
import {connect} from "react-redux"

class Siderbar extends React.Component{
  state ={
    isOpen:false
  }

  closeBmMenu=()=>{
    this.setState({
      isOpen:true
    })
  }
  render(){
    console.log(this.props)
    let authStr = (
    <div>登录|注册</div>
  )

  let userInfo = (
    <div>
      <Link to="" className="bm-user-left">
        {this.props.username}
      </Link>
      <Link to="" className="bm-user-right">
        退出
      </Link>
    </div>
  )
    return(
      <div className="siderbar">
        <Menu isOpen={this.state.isOpen}>
          <div className="bm-user-info">
            <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
            <div className="bm-user-auth">
              {this.props.denglu?userInfo:authStr}
            </div>
          </div>

          <div className="bm-link-list">
            <Link onClick={this.closeBmMenu} to="/">首页</Link>
            <Link onClick={this.closeBmMenu} to="/signup">注册</Link>
            <Link onClick={this.closeBmMenu} to="/cart">购物车</Link>
            <Link onClick={this.closeBmMenu} to="/dishes">猜你喜欢</Link>
          </div>

          <div className="bm-close-button">
            <button onClick={this.closeBmMenu}>关闭</button>
          </div>
        </Menu>
      </div>
    )
  }
}


const mapStateToProps =(state)=>({
  denglu:state.account.denglu,
  username:state.account.currentUserName
})

export default connect(mapStateToProps)(Siderbar)
