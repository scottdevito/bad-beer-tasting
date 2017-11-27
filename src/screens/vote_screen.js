import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

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
    this.state = { open: false };
  }

  renderBeerList = data => {
    return data.map(item => {
      return (
        <div key={item.id}>
          <Divider />
          <ListItem leftCheckbox={<Checkbox />} primaryText={item.beerName} />
          <Divider />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>3 Worst Tasting Beers</h3>
        <List>{this.renderBeerList(data)}</List>
      </div>
    );
  }
}

export default VoteScreen;
