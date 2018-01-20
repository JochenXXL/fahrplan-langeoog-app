import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const Heading = props => (
  <View style={styles.containerStyle}>
    <Text style={styles.textStyle}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 10,
    paddingButtom: 10
  },
  textStyle: {
    textSize: 24,
    textColor: 'blue'
  }
});

export default Heading;
