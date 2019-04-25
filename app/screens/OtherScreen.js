import React from 'react';
import PropTypes from 'prop-types';
import { Button, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ScreenContainer from '../ScreenContainer';

const OtherScreen = (props) => {
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  return (
    <ScreenContainer>
      <Button title="I'm done, sign me out" onPress={signOutAsync} />
      <StatusBar barStyle="default" />
    </ScreenContainer>
  );
};

OtherScreen.navigationOptions = {
  title: 'Lots of features here',
};

OtherScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OtherScreen;
