import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class YourBeerPreview extends Component {
  displayBeerPreview = () => {
    let { beers, userDbInfo } = this.props;
    let userBeer = (beers || []).filter(beer => {
      // eslint-disable-next-line
      return beer.beerId == userDbInfo.beerId;
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
    }
  };
  render() {
    return <div>{this.displayBeerPreview()}</div>;
  }
}

export default YourBeerPreview;
