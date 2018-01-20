import React from 'react';

import { View, StyleSheet } from 'react-native';

const Paragraph = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 5,
    paddingBottom: 10
  }
});

export { Paragraph };
