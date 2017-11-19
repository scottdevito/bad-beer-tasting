import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Login = () => {
  return (
    <div className="login-screen">
      <h1>Login</h1>

      <TextField floatingLabelText="Username" />
      <TextField floatingLabelText="Password" />
      <RaisedButton className="login-button" label="Login" primary={true} />
    </div>
  );
};

export default Login;
