import React,{Component} from "react"
import "./dish.css"
import TitleHeader from "../../shared/TitleHeader/TitleHeader"
import {connect} from "react-redux"
import ShoppingIcon from "../../icons/ShoppingIcon.js"
import bigIcon from "../../icons/bigIcon.js"
import {Link} from "react-router-dom"
class Dish extends Component{

  buy=(dish,isInCart)=>{
    // console.log("buy shop",isInCart)
    if(isInCart)
      return
        this.props.dispatch({type:"ADD_CART",dishId:this.props.match.params.dishId,food:dish})


  }

  render(){
    console.log(this.props.num)
    // console.log(this.props.dishes)三个id，名字价格，描述，照片
    if(Object.keys(this.props.dishes).length!==0){
      const {dishes} =this.props
      const dishId =this.props.match.params.dishId
      // console.log(dishId)
      let dish=dishes[dishId]
      // console.log(dish)
      // console.log(this.props.carts)
        // console.log(this.props.carts)打印一个id下面草莓派，照片，价格，描述
      // console.log(Object.keys(this.props.carts))打印这个草莓派的id
      let isInCart =Object.keys(this.props.carts).includes(dishId)
      // console.log(isInCart)true

    return(
      <div className="dish">
          <TitleHeader title="草莓派" />
          <div className="dish-info">
            <div className="dish-img-wrap">
              <div style={{ 'backgroundImage' :`url(${dish.poster})`}}
                className="img">
              </div>
            </div>
            <div className="dish-info-card">
              <h1 className="dish-name">
                {dish.name}
              </h1>
              <div className="price-tag">
                {dish.price}<span className="unit">元</span>
              </div>
              <div className="shopping-icon-wrap" onClick={()=>this.buy(dish,isInCart)}>
                <ShoppingIcon color={isInCart?'#F86E67':'#D0D0D0'}  />

              </div>
              <p className="dish-desc">
                {dish.desc}
              </p>
              <div className="pay">
                  <Link to="/cart"><ShoppingIcon color={isInCart?'#F86E67':'#D0D0D0'}  /></Link>
                  <div className="pay-num">
                    <span>{this.props.num}</span>
                  </div>
              </div>



              <h1 className="dish-sub-title">营养成分</h1>
              <p className="dish-sub-detail">点击各部分查看详情</p>

              <h1 className="dish-sub-title">销售额</h1>
              <p className="dish-sub-detail">单位：份</p>

              <div className="dish-comment-icon-wrap">

                <span className="dish-comment-no">

                </span>
              </div>

            </div>
          </div>
        </div>
      )
    }else{
      return null
    }
  }
}
const mapStateToProps=(state)=>({
  dishes:state.dish.all,
  carts:state.cart.dishes,
  num:state.cart.num
})
export default connect(mapStateToProps)(Dish)
