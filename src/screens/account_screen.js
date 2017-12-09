import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class AccountScreen extends Component {
  onLogoutSubmit = () => {
    this.props.fbLogout().catch(error => {
      console.log(error);
    });
  };

  // If there is beer info set, display it
  // If there isn't beer info set, display "Add your beer button"
  displayBeerInfo = () => {
    let userBeer = this.props.beers.filter(beer => {
      // eslint-disable-next-line
      return beer.beerId == this.props.userDbInfo.beerId;
    });

    if (userBeer[0] !== undefined) {
      return (
        <Card>
          <div className="your-beer-preview">
            <CardTitle title={userBeer[0].name} />
            <CardText>{userBeer[0].description}</CardText>
          </div>
        </Card>
      );
    } else {
      return <RaisedButton label="Add Your Beer" primary={true} />;
    }
  };

  render() {
    return (
      <div className="account-screen">
        <div className="account-info">
          <h2>{this.props.userDbInfo.email}</h2>
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
