import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Timer from 'material-ui/svg-icons/image/timer';
import { black500 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';

const MainScreen = () => {
  return (
    <div className="main-screen">
      <Timer color={black500} className="timer-icon" />
      <h2 className="timer-count">10:00</h2>

      <Divider />

      <h1>Game Buttons</h1>
      <RaisedButton
        className="game-button"
        label="Get Started!"
        primary={true}
      />
      <RaisedButton className="game-button" label="Vote Now" disabled={true} />
      <Link to="/results">
        <RaisedButton
          className="game-button"
          label="Results"
          secondary={true}
        />
      </Link>
    </div>
  );
};

export default MainScreen;
