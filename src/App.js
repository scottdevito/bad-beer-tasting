import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import firebase from 'firebase';

import AppBarNavContainer from './containers/app_bar_nav.C';
import LoginRegisterScreenContainer from './containers/login_register_screen.C';
import MainScreen from './screens/main_screen';
import ResultsScreenContainer from './containers/results_screen.C';
import RulesScreen from './screens/rules_screen';
import YourBeerScreenContainer from './containers/your_beer_screen.C';
import VoteScreen from './screens/vote_screen';
import AccountScreenContainer from './containers/account_screen.C';
import PrivateRouteContainer from './containers/private_route.C';

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
            <AppBarNavContainer />

            <Route exact path="/" component={LoginRegisterScreenContainer} />
            <PrivateRouteContainer path="/main" component={MainScreen} />
            <PrivateRouteContainer
              path="/your-beer"
              component={YourBeerScreenContainer}
            />
            <PrivateRouteContainer path="/vote" component={VoteScreen} />
            <PrivateRouteContainer
              path="/results"
              component={ResultsScreenContainer}
            />
            <PrivateRouteContainer path="/rules" component={RulesScreen} />
            <PrivateRouteContainer
              path="/account"
              component={AccountScreenContainer}
            />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
