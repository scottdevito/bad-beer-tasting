import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Timer from 'material-ui/svg-icons/image/timer';
import { black500 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';

import LinearProgressBarTimer from '../components/linear_progress_bar_timer';
import TimerCount from '../components/timer_count';

// Pass the amount of seconds until the tasting is over into the LinearProgressBarTimer and TimerCount
let secondsLeft = 50;
let startSeconds = 600;
const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="timer-wrapper">
        <Timer color={black500} className="timer-icon" />
        <h2 className="timer-count">
          <TimerCount secondsLeft={secondsLeft} />
        </h2>
        <LinearProgressBarTimer
          startSeconds={startSeconds}
          secondsLeft={secondsLeft}
        />
      </div>

      <Divider />

      {secondsLeft > 0 ? (
        <Link to="your-beer">
          <RaisedButton
            className="game-button"
            label="Add Your Beer"
            primary={true}
          />
        </Link>
      ) : (
        <RaisedButton className="game-button" label="Vote Now" primary={true} />
      )}
    </div>
  );
};

export default MainScreen;
