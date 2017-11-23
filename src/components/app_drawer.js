import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { white } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';

const iconStyle = {
  marginTop: 10,
  marginRight: 0,
  marginLeft: -4,
};

class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <Menu
          className="nav-menu"
          onClick={this.handleToggle}
          style={iconStyle}
          color={white}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <Link to="/main">
            <MenuItem onClick={this.handleClose}>Home</MenuItem>
          </Link>
          <Link to="/your-beer">
            <MenuItem onClick={this.handleClose}>Your Beer</MenuItem>
          </Link>
          <Link to="/results">
            <MenuItem onClick={this.handleClose}>Results</MenuItem>
          </Link>
          <Link to="/account">
            <MenuItem onClick={this.handleClose}>Account</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default AppDrawer;
