import React from 'react';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>

      <TextField floatingLabelText="Username" />
      <TextField floatingLabelText="Password" />
      <Link to="/main">
        <RaisedButton className="login-button" label="Login" primary={true} />
      </Link>
    </div>
  );
};

export default Login;
