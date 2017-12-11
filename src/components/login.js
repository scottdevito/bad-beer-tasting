import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
// import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      redirectToReferrer: 'false',
    };
  }

  onLoginInputChange = (event, fieldId) => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { [fieldId]: value };
    });
  };

  onLoginSubmit = () => {
    // Clear error message
    this.setState((prevState, props) => {
      return { error: '' };
    });

    // Fire fbLogin action
    // If login success, set redirectToReferrer to true
    // Display error if there is one
    this.props
      .fbLogin(this.state)
      .then(() => {
        this.setState((prevState, props) => {
          return { redirectToReferrer: true };
        });
      })
      .catch(error => {
        this.setState((prevState, props) => {
          return { error: error.code };
        });
      });
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = {
      from: { pathname: '/main' },
    };

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className="login">
        <TextField
          floatingLabelText="Email"
          onChange={event => {
            this.onLoginInputChange(event, 'email');
          }}
          errorText={this.state.error ? this.state.error : ''}
        />
        <TextField
          floatingLabelText="Password"
          type="password"
          onChange={event => {
            this.onLoginInputChange(event, 'password');
          }}
        />
        {/* <Link to="/main"> */}
        <RaisedButton
          className="login-button"
          label="Login"
          primary={true}
          onClick={() => {
            this.onLoginSubmit();
          }}
        />
        {/* </Link> */}

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
  }
}

export default Login;
