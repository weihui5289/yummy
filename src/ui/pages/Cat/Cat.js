import React,{Component} from "react"
import TitleHeader from "../../shared/TitleHeader/TitleHeader.js"
import "./cat.css"
import {connect} from "react-redux"
class Cat extends Component{
  state={
    num:1,
    price:23
  }
  increment=()=>{
    this.setState({
      num:this.state.num+1
    })
  }
  decrement=()=>{
    if(this.state.num!==0){
      this.setState({
        num:this.state.num-1
      })
    }
  }

  render(){
    let {num,price} =this.state
    let totalPrice=num*price
    return(
        <div className="cart">
          <TitleHeader title="购物车" />
          <div className="cart-hero">
            <h1 className="total-price">
              {totalPrice}  元
            </h1>
          </div>
          <div className="cart-list-wrap">
            <div className="cart-item">
               <div className="cart-item-info">
                 <div className="cart-item-poster">

                 </div>
                 <div className="name-price-wrap">
                   <div className="cart-item-name">

                   </div>
                   <div className="cart-item-price">
                    $ <span>{this.state.price}</span>
                   </div>
                 </div>
               </div>
               <div className="cart-action">
                 <div onClick={this.decrement}
                   className="minus">
                   -
                 </div>
                 <div className="item-count">
                  {this.state.num}
                 </div>
                 <div onClick={this.increment}
                   className="plus">
                   +
                 </div>
               </div>
             </div>
            <div className="cart-checkout-button">
              结算
            </div>
          </div>
        </div>
      )
    }
  }
const mapStateToProps =(state)=>({
  dishes:state.dish.all
})
export default connect(mapStateToProps)(Cat)
