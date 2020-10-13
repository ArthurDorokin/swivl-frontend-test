import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Details from "./components/pages/details/Details";
import Content from "./components/pages/content/Content";
import './App.css';
class App extends Component {

  render() {
    return (
        <Switch>
            <Route exact path="/" component={Content}/>
            <Route path=":user" component={Details}/>
        </Switch>
    );
  }
}

export default App;
