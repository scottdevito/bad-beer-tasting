import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

const YourBeerPreview = ({ myBeer }) => (
  <div>
    <List>
      <Divider />
      <ListItem leftCheckbox={<Checkbox />} primaryText={myBeer} />
      <Divider />
    </List>
  </div>
);

export default YourBeerPreview;
