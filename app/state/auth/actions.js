import {
  AUTH_LOGGING_IN,
  AUTH_LOGGED_IN,
  AUTH_ERR_LOG_IN,
  AUTH_LOGOUT,
  AUTH_CLEAR_LOGIN_ERROR_MESSAGE,
} from './types';
import { userService } from '../../service/userService';
import { errorParser } from '../../service/apiErrorParser';
import navigationService from '../../service/navigationService';

export const loggedIn = data => ({
  type: AUTH_LOGGED_IN,
  payload: data,
});

export const clearLoginErrorMessage = () => ({
  type: AUTH_CLEAR_LOGIN_ERROR_MESSAGE,
});

export const errorLogIn = errorMessage => ({
  type: AUTH_ERR_LOG_IN,
  payload: errorMessage,
});

export const loggingIn = () => ({
  type: AUTH_LOGGING_IN,
});

export const loggedOut = () => ({
  type: AUTH_LOGOUT,
});

export const logout = () => async (dispatch, getState) => {
  await userService.logout(getState).then((res) => {
    dispatch(loggedOut());
  }).catch((err) => { });
};

export const login = (username, password) => (dispatch) => {
  dispatch(loggingIn());
  userService.login(username, password).then(async (res) => {
    await dispatch(loggedIn(res.data));
    await navigationService.navigate('App');
  }).catch((err) => {
    dispatch(errorLogIn(errorParser.parseLoginError(err).message));
  });
};
