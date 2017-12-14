import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import YourBeerPreview from '../components/your_beer_preview';

class YourBeerScreen extends Component {
  state = {
    name: '',
    description: '',
  };

  onAddBeerInputChange = (event, fieldId) => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { [fieldId]: value };
    });
  };

  onAddBeerSubmit = () => {
    this.props.addNewBeer(this.state, this.props.userDbInfo);
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
        {this.props.userDbInfo.beerId != null ? (
          <div>
            <h3>Your Submitted Beer:</h3>

            {this.displayBeerInfo()}
          </div>
        ) : (
          <div className="your-beer-screen">
            <h2>Add Your Beer</h2>
            <TextField
              hintText="It better be trash"
              floatingLabelText="Enter the name of your beer"
              onChange={event => {
                this.onAddBeerInputChange(event, 'name');
              }}
              value={this.state.name}
            />

            <TextField
              floatingLabelText="Enter a short description"
              onChange={event => {
                this.onAddBeerInputChange(event, 'description');
              }}
              value={this.state.description}
            />

            <RaisedButton
              className="your-beer-submit"
              label="Submit"
              primary={true}
              onClick={() => this.onAddBeerSubmit()}
            />
          </div>
        )}
      </div>
    );
  }
}

export default YourBeerScreen;
