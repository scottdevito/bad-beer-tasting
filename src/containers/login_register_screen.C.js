import { connect } from 'react-redux';
import LoginRegisterScreen from '../screens/login_register_screen';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

const LoginRegisterScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRegisterScreen);

export default LoginRegisterScreenContainer;
