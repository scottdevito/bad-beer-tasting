import { connect } from 'react-redux';
import LoginRegisterScreen from '../screens/login_register_screen';
import { testAction } from '../actions/index';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  testAction,
};

const LoginRegisterScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRegisterScreen);

export default LoginRegisterScreenContainer;
