import React from "react"

class Siderbar extends React.Component{
  render(){
    return(
      <div className="siderbar">
        <Link to="/">首页</Link>
        <Link to="/signup">注册</Link>
      </div>
    )
  }
}
