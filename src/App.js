import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBarNav from './components/app_bar_nav';
import LoginRegisterScreen from './screens/login_register_screen';
import MainScreen from './screens/main_screen';
import ResultsScreen from './screens/results_screen';
import RulesScreen from './screens/rules_screen';
import YourBeerScreen from './screens/your_beer_screen';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="app">
            <AppBarNav />

            <Route exact path="/" component={LoginRegisterScreen} />
            <Route path="/main" component={MainScreen} />
            <Route path="/results" component={ResultsScreen} />
            <Route path="/rules" component={RulesScreen} />
            <Route path="/your-beer" component={YourBeerScreen} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
