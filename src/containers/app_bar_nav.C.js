import { connect } from 'react-redux';
import AppBarNav from '../components/app_bar_nav';

const mapStateToProps = state => {
  return {
    userDbInfo: state.userDbInfo,
  };
};

const mapDispatchToProps = {};

const AppBarNavContainer = connect(mapStateToProps, mapDispatchToProps)(
  AppBarNav
);

export default AppBarNavContainer;
