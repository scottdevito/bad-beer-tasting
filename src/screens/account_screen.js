import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class AccountScreen extends Component {
  onLogoutSubmit = () => {
    this.props.fbLogout().catch(error => {
      console.log(error);
    });
  };
  render() {
    return (
      <div className="account-screen">
        <div className="account-info">
          <h2>Email address</h2>
          <h3>Your Beer Name</h3>
          <h4>Your Beer description</h4>
        </div>

        <RaisedButton
          label="Logout"
          secondary={true}
          onClick={() => {
            this.onLogoutSubmit();
          }}
        />
      </div>
    );
  }
}

export default AccountScreen;
