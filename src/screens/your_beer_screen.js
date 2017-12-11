import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import YourBeerPreview from '../components/your_beer_preview';

class YourBeerScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myBeer: '',
      beerDescription: '',
    };
  }

  onAddBeerInputChange = (event, fieldId) => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { [fieldId]: value };
    });
  };

  displayBeerInfo = () => {
    let { beers, userDbInfo } = this.props;

    if (beers) {
      return <YourBeerPreview userDbInfo={userDbInfo} beers={beers} />;
    }
  };

  render() {
    return (
      <div className="your-beer-screen">
        <h2>Add Your Beer</h2>
        <TextField
          hintText="It better be trash"
          floatingLabelText="Enter the name of your beer"
          onChange={event => {
            this.onAddBeerInputChange(event, 'myBeer');
          }}
          value={this.state.myBeer}
        />

        <TextField
          floatingLabelText="Enter a short description"
          onChange={event => {
            this.onAddBeerInputChange(event, 'beerDescription');
          }}
          value={this.state.beerDescription}
        />

        <RaisedButton
          className="your-beer-submit"
          label="Submit"
          primary={true}
        />

        {this.props.userDbInfo.beerId > 0 ? (
          <div>
            <h3>Your Current Beer Info:</h3>

            {this.displayBeerInfo()}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default YourBeerScreen;
