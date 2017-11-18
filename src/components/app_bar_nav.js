import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppBarNav extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="Title" />
      </MuiThemeProvider>
    );
  }
}

export default AppBarNav;
