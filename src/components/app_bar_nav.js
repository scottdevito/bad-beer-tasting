import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import { Link } from 'react-router-dom';

import AppDrawer from './app_drawer';

class AppBarNav extends Component {
  // handleClick = () => {
  //   const rules = {
  //     pathname: '/rules',
  //   };

  //   history.push(rules);
  // };

  render() {
    return (
      <AppBar
        title="Bad Beer Tasting"
        iconElementLeft={<AppDrawer />}
        iconElementRight={
          <FlatButton
            className="rules-explained-button"
            label={<Link to="/rules">Rules Explained</Link>}
          />
        }
      />
    );
  }
}

export default AppBarNav;
