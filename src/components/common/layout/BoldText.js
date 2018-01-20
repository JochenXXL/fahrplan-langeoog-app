import React from 'react';

import { Text, StyleSheet } from 'react-native';

const BoldText = ({ children }) => (
  <Text style={styles.textStyle}>{children} </Text>
);

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold'
  }
});

export { BoldText };
