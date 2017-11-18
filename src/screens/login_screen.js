import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const LoginScreen = () => {
  return (
    <div className="login-screen">
      <MuiThemeProvider>
        <h1>Bad Beer Tasting</h1>

        <TextField floatingLabelText="Username" />
        <TextField floatingLabelText="Password" />
        <RaisedButton className="login-button" label="Login" primary={true} />
      </MuiThemeProvider>
    </div>
  );
};

export default LoginScreen;
