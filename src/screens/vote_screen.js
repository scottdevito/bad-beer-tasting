import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FlatButton from 'material-ui/FlatButton';

// TODO: Add submit button (must have voted on 3 beers), style properly, use filter to remove beers once they're chosen

const data = [
  { beerName: 'Beer 1', username: 'some user 2', id: 0 },
  { beerName: 'Beer 2', username: 'some user 2', id: 1 },
  { beerName: 'Beer 3', username: 'some user 2', id: 2 },
  {
    beerName: 'Beer 4 a kljlksjd klj lkj sljkljalkjs',
    username: 'some user 2',
    id: 3,
  },
  { beerName: 'Beer 5', username: 'some user 2', id: 4 },
  { beerName: 'Beer 6', username: 'some user 2', id: 5 },
  { beerName: 'Beer 7', username: 'some user 2', id: 6 },
  { beerName: 'Beer 8', username: 'some user 2', id: 7 },
  { beerName: 'Beer 9', username: 'some user 2', id: 8 },
];

class VoteScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBeerIds: {
        0: '',
        1: '',
        2: '',
      },
      slideIndex: 0,
    };
  }

  renderBeerList = data => {
    let { selectedBeerIds } = this.state;

    // Hide button after the user has voted for a beer
    let filteredData = data.filter(beer => {
      return (
        beer.beerName !== selectedBeerIds[0] &&
        beer.beerName !== selectedBeerIds[1] &&
        beer.beerName !== selectedBeerIds[2]
      );
    });

    return filteredData.map(item => {
      return (
        <div key={item.id}>
          <Divider />
          <ListItem
            onClick={() => this.selectBeer(item.beerName)}
            primaryText={item.beerName}
          />
          <Divider />
        </div>
      );
    });
  };

  // Only allow user to select 3 beers
  // If the beer id already exists in the object, replace it
  // Order is important
  selectBeer = id => {
    let { selectedBeerIds, slideIndex } = this.state;

    let newSelectedBeerIds = {};

    newSelectedBeerIds[slideIndex] = id;

    this.setState({
      selectedBeerIds: Object.assign(selectedBeerIds, newSelectedBeerIds),
    });
  };

  handleSwipeChange = value => {
    this.setState({
      slideIndex: value,
    });
  };

  renderSubmitButton = () => {
    let { selectedBeerIds } = this.state;

    if (selectedBeerIds[0] && selectedBeerIds[1] && selectedBeerIds[2]) {
      return (
        <FlatButton
          label="Submit Vote"
          fullWidth={true}
          backgroundColor="#80e27e"
          hoverColor="#4caf50"
        />
      );
    }
  };

  render() {
    return (
      <div>
        <div>
          <Tabs onChange={this.handleSwipeChange} value={this.state.slideIndex}>
            <Tab label="#1" value={0} />
            <Tab label="#2" value={1} />
            <Tab label="#3" value={2} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleSwipeChange}
          >
            <div className="vote-preview-container">
              <p>Select worst tasting beer #1</p>
              <h2>{this.state.selectedBeerIds[0]}</h2>
            </div>
            <div className="vote-preview-container">
              <p>Select worst tasting beer #2</p>
              <h2>{this.state.selectedBeerIds[1]}</h2>
            </div>
            <div className="vote-preview-container">
              <p>Select worst tasting beer #3</p>
              <h2>{this.state.selectedBeerIds[2]}</h2>
            </div>
          </SwipeableViews>
        </div>
        {this.renderSubmitButton()}
        <List>{this.renderBeerList(data)}</List>
      </div>
    );
  }
}

export default VoteScreen;
