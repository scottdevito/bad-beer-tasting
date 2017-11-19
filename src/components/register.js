import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>

      <TextField hintText="Create a username" floatingLabelText="Username" />
      <TextField hintText="Create a password" floatingLabelText="Password" />
      <RaisedButton className="register-button" label="Submit" primary={true} />
    </div>
  );
};

export default Register;
