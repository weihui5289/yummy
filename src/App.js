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


class App extends Component {
  render() {
    return (

        <Provider store={store}>
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
                  <Route path="/sider" component={Siderbar} />
                  <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
          </BrowserRouter>
        </Provider>
    )
  }
}

export default App;
