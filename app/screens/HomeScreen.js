import React from 'react';
import PropTypes from 'prop-types';
import ScreenContainer from '../ScreenContainer';
import HomeActions from '../containers/home/HomeActions';

const HomeScreen = () => (
  <ScreenContainer>
    <HomeActions />
  </ScreenContainer>
);

HomeScreen.navigationOptions = {
  title: 'Welcome to the app!',
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
