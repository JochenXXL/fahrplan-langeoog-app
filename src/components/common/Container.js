import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ children }) => (
  <View style={styles.containerStyle}>{children}</View>
);

const styles = StyleSheet.create({
  containerStyle: {
    padding: 5
  }
});

export default Container;
