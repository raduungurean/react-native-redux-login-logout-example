import AsyncStorage from '@react-native-community/async-storage';

const checkAsyncStorage = async () => {
  const token = await AsyncStorage.getItem('userToken');
  const user = await AsyncStorage.getItem('userData');

  return {
    token,
    user: JSON.parse(user),
  };
};

export default checkAsyncStorage;
