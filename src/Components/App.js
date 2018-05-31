import React, { Component } from 'react';
import './App.css';
import Feeds from './Feeds'
import Feed from './Feed'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Detail from './Detail'
import Home from './Home'

class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
        
        <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
