import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./ui/pages/Home/Home"
import Signup from "./ui/pages/Signup/Signup"
import Siderbar from "./ui/shared/Siderbar/Siderbar"
import Dashboard from "./ui/pages/Dashboard/Dashboard"
import Login from "./ui/pages/Login/Login"
import store from "./store"
import {Provider} from "react-redux"
import AlertBox from "./ui/shared/Alert/AlertBox"
import axios from "axios"
import Settings from "./Setting"
import Dish from "./ui/pages/Dish/Dish"
import Cart from "./ui/pages/Cat/Cat"
import Dishes from "./ui/pages/Dishes/Dishes"


class App extends Component {
  componentWillMount(){
    //丛浏览器Application 找到登录时候的userId 然后发get请求
    let id =localStorage.getItem("userId")
    if(id){
      axios.get(`${Settings.host}/user/${id}`)
      .then(res=>{
        // console.log(res.data)打印 user中的信息，然后user.username
        store.dispatch({type:"SIGN_IN",username:res.data.user.username})
      })

      //LOAD_Dishes
      axios.get(`${Settings.host}/dishes`)
      .then(res=>{
        // console.log(res.data)打印dishes里面三个id msg:读取成功
        store.dispatch({type:"LOAD_DISHES",dishes:res.data.dishes})
      })

    }
  }


  render() {
    return (

        <Provider store={store}>
        <div>
          <AlertBox />
            <BrowserRouter>
              <div >
                <Route render={({location})=>{
                  return location.pathname!=="/"?
                  (<Siderbar />):null
                }} />
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/dish/:dishId" component={Dish} />
                    <Route path="/cart" component={Cart} />
                  <Route path="/dishes" component={Dishes} />
                  </Switch>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
    )
  }
}

export default App;
