import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FlatButton from 'material-ui/FlatButton';

class VoteScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBeerIds: {
        0: '',
        1: '',
        submit: false,
        confirmedSubmit: false,
      },
      slideIndex: 0,
    };
  }

  renderBeerList = beers => {
    let { selectedBeerIds } = this.state;

    // Hide button after the user has voted for a beer
    let filteredData = beers.filter(beer => {
      return (
        beer.name !== selectedBeerIds[0] && beer.name !== selectedBeerIds[1]
      );
    });

    return filteredData.map(item => {
      return (
        <div key={item.beerId}>
          <Divider />
          <ListItem
            onClick={() => this.selectBeer(item.name)}
            primaryText={item.name}
          />
          <Divider />
        </div>
      );
    });
  };

  // If the beer id already exists in the object, replace it
  selectBeer = id => {
    let { selectedBeerIds, slideIndex } = this.state;

    let newSelectedBeerIds = {};

    newSelectedBeerIds[slideIndex] = id;

    this.setState({
      selectedBeerIds: Object.assign({}, selectedBeerIds, newSelectedBeerIds),
    });
  };

  handleSwipeChange = value => {
    this.setState({
      slideIndex: value,
    });
  };

  renderSubmitButton = () => {
    let { selectedBeerIds, confirmedSubmit } = this.state;

    if (selectedBeerIds[0] && selectedBeerIds[1]) {
      return this.state.submit ? (
        <FlatButton
          label={confirmedSubmit ? 'Submitting Vote...' : 'Confirm Submit'}
          fullWidth={true}
          backgroundColor="#80e27e"
          hoverColor="#4caf50"
          onClick={() => this.submitFinalVote()}
          disabled={confirmedSubmit}
        />
      ) : (
        <FlatButton
          label="Submit Vote"
          fullWidth={true}
          backgroundColor="#62efff"
          hoverColor="#00bcd4"
          onClick={() => this.confirmSubmit()}
        />
      );
    }
  };

  confirmSubmit = () => {
    this.setState((prevState, props) => {
      return { submit: true };
    });
  };

  submitFinalVote = () => {
    console.log('Dispatch action: this.props.submitVote()');

    this.setState((prevState, props) => {
      return { confirmedSubmit: !prevState.confirmedSubmit };
    });
  };

  render() {
    return (
      <div className="vote-screen">
        <div className="vote-swipe">
          <Tabs onChange={this.handleSwipeChange} value={this.state.slideIndex}>
            <Tab label="Worst Tasting Beer" value={0} />
            <Tab label="Best Tasting Beer" value={1} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleSwipeChange}
          >
            <div className="vote-preview-container">
              <h2>{this.state.selectedBeerIds[0]}</h2>
            </div>
            <div className="vote-preview-container">
              <h2>{this.state.selectedBeerIds[1]}</h2>
            </div>
          </SwipeableViews>
        </div>
        {this.renderSubmitButton()}
        <List>{this.renderBeerList(this.props.beers)}</List>
      </div>
    );
  }
}

export default VoteScreen;
