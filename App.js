import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-native-elements";
import AppContainer from "./app/navigation";
import store from "./app/reducers";
import theme from "./app/theme";
import navigationService from "./app/service/navigationService";

export default function App() {
  return (
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
}
