import { connect } from 'react-redux';
import LoginRegisterScreen from '../screens/login_register_screen';
import { fbRegister, fbLogin } from '../actions/index';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  fbRegister,
  fbLogin,
};

const LoginRegisterScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRegisterScreen);

export default LoginRegisterScreenContainer;
