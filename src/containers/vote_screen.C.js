import { connect } from 'react-redux';
import VoteScreen from '../screens/vote_screen';

const mapStateToProps = state => {
  return {
    beers: state.beers,
  };
};

const mapDispatchToProps = {};

const VoteScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  VoteScreen
);

export default VoteScreenContainer;
