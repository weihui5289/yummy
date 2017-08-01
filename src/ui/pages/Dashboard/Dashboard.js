import React, { Component } from 'react'
import TitleHeader from "../../shared/TitleHeader/TitleHeader"
import "./dashboard.css"
import svg from './comment.svg'
import Feeditem from "./Feeditem"
class Dashboard extends Component{
  cards=[
    {username:"Billie zhang",comment:"真是不错"},
    {username:"lsj",comment:"开车拉"},
    {username:"ldak",comment:"6666"}
  ]

  render(){
    const cardList =this.cards.map((item,index)=>{
      return(
        <Feeditem key={index} username={item.username} comment={item.comment} />
      )
    })

    return(
      <div className="dashboard">
         <TitleHeader title="好友更新"/>
          <div className="feed-wrap">
               {cardList}
          </div>
      </div>
    )
  }
}

export default Dashboard
