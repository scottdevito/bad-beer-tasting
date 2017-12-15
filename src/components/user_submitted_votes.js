import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

class UserSubmittedVotes extends Component {
  renderWorstAndBest = () => {
    let { beers, worstVote, bestVote } = this.props;

    let worstBeer = beers.filter(beer => {
      return beer.beerId === worstVote;
    });

    let bestBeer = beers.filter(beer => {
      return beer.beerId === bestVote;
    });

    return (
      <div>
        <div>
          <Card>
            <CardTitle title="Your Worst Beer Vote" />
            <CardText>
              <h3>{worstBeer[0].name}</h3>
            </CardText>
          </Card>
        </div>

        <div>
          <Card>
            <CardTitle title="Your Best Beer Vote" />
            <CardText>
              <h3>{bestBeer[0].name}</h3>
            </CardText>
          </Card>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderWorstAndBest()}</div>;
  }
}

export default UserSubmittedVotes;
