import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import AppDrawer from './app_drawer';

class AppBarNav extends Component {
  render() {
    return <AppBar title="Bad Beer Tasting" iconElementLeft={<AppDrawer />} />;
  }
}

export default AppBarNav;
