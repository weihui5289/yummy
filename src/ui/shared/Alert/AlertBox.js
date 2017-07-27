import React, { Component } from "react"
import "./alert.css"
import {connect} from "react-redux"
class AlertBox extends Component{

  closeAlert = ()=> {
    this.props.dispatch({type:"HIDE_ALERT"})
  }

  render(){
    // console.log(this.props)，打印showAlert,false,alertMeg:""

    // 成功显示报错信息，打印console.log(this.props)打印 showAlert:true,alertMeg:"用户重复"


    return(
      <div className={  this.props.showAlert ? "alert-box show" : "alert-box" }>
         <div className="alert-content-card">
           <div className="alert-msg">
            {this.props.alertMeg}
           </div>
           <div onClick={this.closeAlert}
             className="alert-close-button">
             关闭
           </div>
         </div>
       </div>
    )
  }
}

const mapStateToProps =(state)=>({
  //console.log(state),显示app和account
  showAlert:state.app.showAlert,
  alertMeg:state.app.alertMeg
})

export default connect(mapStateToProps)(AlertBox)
