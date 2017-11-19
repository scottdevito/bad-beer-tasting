import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const MainScreen = () => {
  return (
    <div>
      <div>Main</div>
      <Link to="/results">
        <RaisedButton
          className="results-button"
          label="Results"
          primary={true}
        />
      </Link>
    </div>
  );
};

export default MainScreen;
