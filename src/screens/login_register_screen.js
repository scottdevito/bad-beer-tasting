import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import Login from '../components/login';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class LoginRegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = value => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="login-register">
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label="Login" value={0} />
          <Tab label="Register" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <Login />
          </div>
          <div style={styles.slide}>slide n°2</div>
          <div style={styles.slide}>slide n°3</div>
        </SwipeableViews>
      </div>
    );
  }
}

export default LoginRegisterScreen;
