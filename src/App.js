import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppBarNav from './components/app_bar_nav';
import LoginScreen from './screens/login_screen';
import MainScreen from './screens/main_screen';
import ResultsScreen from './screens/results_screen';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBarNav />

          <Route exact path="/" component={LoginScreen} />
          <Route path="/main" component={MainScreen} />
          <Route path="/results" component={ResultsScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
