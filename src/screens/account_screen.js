import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class AccountScreen extends Component {
  onLogoutSubmit = () => {
    this.props.fbLogout().catch(error => {
      console.log(error);
    });
  };

  displayBeerInfo = () => {
    // If there is beer info set, display it
    // If there isn't beer info set, display "Add your beer button"
  };

  render() {
    return (
      <div className="account-screen">
        <div className="account-info">
          <h2>Email address</h2>
          <h3>Your Beer Info:</h3>
          {this.displayBeerInfo()}
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
