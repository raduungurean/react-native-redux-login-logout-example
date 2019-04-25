import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 5,
    margin: 5,
    borderColor: '#d6d7da',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

export default ScreenContainer;
