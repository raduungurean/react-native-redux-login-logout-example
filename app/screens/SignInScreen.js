import React from 'react';
import PropTypes from 'prop-types';
import ScreenContainer from '../ScreenContainer';
import LoginForm from '../containers/auth/LoginForm';

const SignInScreen = (props) => (
  <ScreenContainer>
    <LoginForm navigation={props.navigation} />
  </ScreenContainer>
);

SignInScreen.navigationOptions = {
  title: 'Please sign in',
};

SignInScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignInScreen;
