import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route
              exact path='/'
              component={Home}
            />
            <Route
              exact
              path={"/dashboard"}
              component={Dashboard}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
