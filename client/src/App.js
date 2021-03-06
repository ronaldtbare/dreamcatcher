import React, { Component } from "react";

import "./App.css";
import Search from "./components/Search.js";
import DreamList from "./components/DreamList.js";
import Save from "./components/Save.js";

import Jumbotron from "./components/Jumbotron.js";
import Nav from "./components/Nav.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Jumbotron/>
          <hr />
          <Switch>
            <Route path="/" component={Search} exact/>
            <Route path="/search" component={Search} exact/>
            <Route path="/dreamList/:searchParameter" component={DreamList} exact />
            <Route path="/save" component={Save} />
          </Switch>
        </div>
      </BrowserRouter>
        
    );
  }
}

export default App;
