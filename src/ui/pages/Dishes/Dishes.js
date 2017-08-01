import React ,{Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import "./Dishes.css"
import TitleHeader from "../../shared/TitleHeader/TitleHeader"
class Dishes extends Component{
  render(){
    // console.log(this.props)
    let {dishes} =this.props
    // console.log(Object.keys(dishes))打印一个数组，里面有三个id
    if(Object.keys(dishes).length!==0){

      return(
        <div>
          <TitleHeader title="猜你喜欢" />
          {
            Object.keys(dishes).map(id=>(
                <div key={id} className="dish-card">

                    <Link to={`/dish/${id}`} >
                     <div style={{ 'backgroundImage' :`url(${dishes[id].poster})` }}
                       className="dish-card-poster">
                           </div>
                     <div className="dish-card-detail">
                       <h1 className="dish-name">
                         {dishes[id].name}
                       </h1>

                       <div className="price-tag">
                         {dishes[id].price}<span className="unit">元</span>
                       </div>

                       <div className="dish-card-icon-wrap">
                         <div className="dish-card-icon-inner">
                           {/* <CommentIcon color="#D0D0D0" /> */}
                           <span className="dish-comment-no">

                           </span>
                         </div>
                       </div>

                       <div className="dish-desc">
                         {dishes[id].desc}
                         <div className="dish-desc-mask">
                         </div>
                       </div>
                     </div>
                    </Link>
                </div>
            ))
          }
        </div>
      )
    }else{
      return null
    }
  }
}
const mapStateToProps =(state)=>({
  dishes:state.dish.all
})
export default connect(mapStateToProps)(Dishes)
