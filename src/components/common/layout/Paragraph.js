import React from 'react';

import { View, StyleSheet } from 'react-native';

const Paragraph = ({ children }) => (
  <View style={styles.containerStyle}>{children}</View>
);

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 5,
    paddingBottom: 10
  }
});

export { Paragraph };
