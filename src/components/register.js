import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>

      <TextField hintText="Create a username" floatingLabelText="Username" />
      <TextField hintText="Create a password" floatingLabelText="Password" />
      <Link to="/main">
        <RaisedButton
          className="register-button"
          label="Submit"
          primary={true}
        />
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

export default Register;
