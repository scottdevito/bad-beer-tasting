import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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

  render() {
    return (
      <div className="your-beer-screen">
        <h2>Add Your Beer</h2>
        <TextField
          hintText="It better be fucking trash"
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
      </div>
    );
  }
}

export default YourBeerScreen;
