import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const Heading = ({ children }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.textStyle}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    fontSize: 24,
    color: '#002563'
  }
});

export { Heading };
