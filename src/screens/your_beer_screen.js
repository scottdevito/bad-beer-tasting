import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class YourBeerScreen extends Component {
  render() {
    return (
      <div className="your-beer-screen">
        <TextField
          hintText="It better be fucking trash"
          floatingLabelText="Enter the name of your beer"
        />

        <TextField floatingLabelText="Enter a short description" />

        <RaisedButton
          className="your-beer-submit"
          label="Submit Beer"
          primary={true}
        />
      </div>
    );
  }
}

export default YourBeerScreen;
