import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class YourBeerScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myBeer: '',
    };
  }

  onAddBeerInputChange = event => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { myBeer: value };
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
            this.onAddBeerInputChange(event);
          }}
          value={this.state.myBeer}
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
