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
                  </Switch>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
    )
  }
}

export default App;
