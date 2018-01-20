import React from 'react';

import { Text, StyleSheet } from 'react-native';

const BoldText = props => (
  <Text style={styles.textStyle}>{props.children} </Text>
);

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold'
  }
});

export { BoldText };
