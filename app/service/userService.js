import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../config';

function login(username, password) {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/user/auth`, {
      username,
      password,
    }).then((response) => {
      AsyncStorage.setItem('userToken', response.data.token)
        .then(() => {
          resolve(response);
          AsyncStorage.setItem('userData', JSON.stringify(response.data.user));
        });
    }).catch(err => reject(err));
  });
}

async function logout(getState) {
  return new Promise(async (resolve, reject) => {
    const currentState = await getState();
    const { token } = currentState.auth;
    axios.post(`${API_URL}/user/logout`, {}, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(async (response) => {
      resolve(response);
      await AsyncStorage.removeItem('userData');
      await AsyncStorage.removeItem('userToken');
    }).catch(err => reject(err));
  });
}

export const userService = {
  login,
  logout,
};
