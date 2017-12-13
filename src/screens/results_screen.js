import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class ResultsScreen extends Component {
  renderTableBody = () => {
    let { beers } = this.props;
    let newBeersArray = beers.slice(0);

    let sortedBeersArray = newBeersArray.sort(function(a, b) {
      return parseFloat(b.worstVotes) - parseFloat(a.worstVotes);
    });

    return (sortedBeersArray || []).map(beer => {
      return (
        <TableRow key={beer.beerId}>
          <TableRowColumn style={{ width: '8.5em' }}>
            {beer.name}
          </TableRowColumn>
          <TableRowColumn>{beer.worstVotes}</TableRowColumn>
          <TableRowColumn>{beer.bestVotes}</TableRowColumn>
        </TableRow>
      );
    });
  };

  render() {
    return (
      <div>
        <Table fixedHeader={true}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={{ width: '5em' }}>
                Beer Name
              </TableHeaderColumn>
              <TableHeaderColumn>
                <FlatButton label="Worst" onClick={() => this.sortByWorst()} />
              </TableHeaderColumn>
              <TableHeaderColumn>
                <FlatButton label="Best" onClick={() => this.sortByWorst()} />
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderTableBody()}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ResultsScreen;
