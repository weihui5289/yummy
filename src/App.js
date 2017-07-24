import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "./ui/pages/Home/Home"
import Home from "./ui/pages/Signup/Signup"
import Siderbar from "./ui/shared/Siderbar/Siderbar"
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div >
            <Route>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
              </Switch>
            </Route>
          </div>
        </BrowserRouter>
      </div>    
    )
  }
}

export default App;
