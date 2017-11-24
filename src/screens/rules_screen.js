import React, { Component } from 'react';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

class RulesScreen extends Component {
  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: '12px 0' }}>
        {step > 1 ? (
          <Link to="/main">
            <RaisedButton
              label={'Back to Main Screen'}
              disableTouchRipple={true}
              disableFocusRipple={true}
              primary={true}
              style={{ marginRight: 12 }}
            />
          </Link>
        ) : (
          <RaisedButton
            label={stepIndex === 2 ? 'Back to Main Screen' : 'Next'}
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onClick={this.handleNext}
            style={{ marginRight: 12 }}
          />
        )}

        {step > 0 && (
          <FlatButton
            label="Previous"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const { stepIndex } = this.state;

    return (
      <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>
              <h3>Add your beer</h3>
            </StepLabel>
            <StepContent>
              <p>Add your beer to the list of bad beers</p>
              <img
                src="https://s3.amazonaws.com/bad-beer-tasting/Bad+Beer+Bin.svg"
                style={{ marginLeft: 70 }}
                alt="Add beer"
              />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              <h3>Vote on the top 3 worst beers</h3>
            </StepLabel>
            <StepContent>
              <p>
                Vote on which of the beers you think were the worst tasting{' '}
              </p>
              <img
                src="https://s3.amazonaws.com/bad-beer-tasting/Worst+Beer+Ballot.svg"
                style={{ marginLeft: 70 }}
                alt="Vote on beer"
              />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>
              <h3>Wait for the results</h3>
            </StepLabel>
            <StepContent>
              <p>
                When the add beer phase is over, you'll have time to vote on
                which beers you think were the most vile. Cast your vote and
                wait to see the results!
              </p>
              <img
                src="https://s3.amazonaws.com/bad-beer-tasting/Bad+Beer+Results+Graph.svg"
                style={{ marginLeft: 70 }}
                alt="View results"
              />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}

export default RulesScreen;
