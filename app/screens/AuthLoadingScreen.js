import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import ScreenContainer from '../ScreenContainer';
import store from '../state';
import checkAsyncStorage from '../helpers/checkAsyncStorage';
import { loggedIn } from '../state/auth/actions';
import navigationService from '../service/navigationService';

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userStorage = await checkAsyncStorage();
    await store.dispatch(this.props.loggedIn({
      user: userStorage.user,
      token: userStorage.token,
    }));
    navigationService.navigate(userStorage.token ? 'App' : 'Auth', {});
  };

  render() {
    return (
      <ScreenContainer>
        <ActivityIndicator />
      </ScreenContainer>
    );
  }
}

function mapStateToProps(state) {
  return { loggingIn: state.auth.loggingIn };
}

export default connect(mapStateToProps, { loggedIn })(AuthLoadingScreen);
