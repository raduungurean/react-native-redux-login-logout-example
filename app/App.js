import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import AppContainer from './navigation/index';
import store from './state/index';
import theme from './theme';
import navigationService from './service/navigationService';

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppContainer
        ref={(navigatorRef) => {
          navigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  </ThemeProvider>
);

export default App;
