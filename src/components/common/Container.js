import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ children }) => (
  <View style={styles.containerStyle}>{children}</View>
);

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    backgroundColor: '#ffffff'
  }
});

export default Container;
