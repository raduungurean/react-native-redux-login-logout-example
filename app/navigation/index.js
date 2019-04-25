import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import OtherScreen from '../screens/OtherScreen';

const AppStack = createDrawerNavigator({
  Home: {
    screen: createStackNavigator({ Home: HomeScreen }),
  },
  Other: {
    screen: createStackNavigator({ Other: OtherScreen }),
  },
});

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));

export default AppContainer;
