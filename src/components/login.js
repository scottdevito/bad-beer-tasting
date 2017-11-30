import React from 'react';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const Login = () => {
  return (
    <div className="login">
      <TextField floatingLabelText="Username" />
      <TextField floatingLabelText="Password" type="password" />
      <Link to="/main">
        <RaisedButton className="login-button" label="Login" primary={true} />
      </Link>

      <p>or</p>

      <RaisedButton
        className="facebook-login-button"
        href="https://github.com/callemall/material-ui"
        target="_blank"
        label="Login With Facebook"
        backgroundColor="#3b5998"
        labelColor="#ffffff"
      />
    </div>
  );
};

export default Login;
