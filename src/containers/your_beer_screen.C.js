import { connect } from 'react-redux';
import YourBeerScreen from '../screens/your_beer_screen';

const mapStateToProps = state => {
  return {
    userDbInfo: state.userDbInfo,
    beers: state.beers,
  };
};

const mapDispatchToProps = {};

const YourBeerScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  YourBeerScreen
);

export default YourBeerScreenContainer;
