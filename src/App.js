import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import firebase from 'firebase';

import AppBarNav from './components/app_bar_nav';
import LoginRegisterScreenContainer from './containers/login_register_screen.C';
import MainScreen from './screens/main_screen';
import ResultsScreen from './screens/results_screen';
import RulesScreen from './screens/rules_screen';
import YourBeerScreen from './screens/your_beer_screen';
import VoteScreen from './screens/vote_screen';
import AccountScreenContainer from './containers/account_screen.C';

class App extends Component {
  componentWillMount() {
    // Listen for Auth Changes
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.fbLoginPersist(user);
      } else {
        this.props.fbLogout();
      }
    });
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="app">
            <AppBarNav />

            <Route exact path="/" component={LoginRegisterScreenContainer} />
            <Route path="/main" component={MainScreen} />
            <Route path="/your-beer" component={YourBeerScreen} />
            <Route path="/vote" component={VoteScreen} />
            <Route path="/results" component={ResultsScreen} />
            <Route path="/rules" component={RulesScreen} />
            <Route path="/account" component={AccountScreenContainer} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
