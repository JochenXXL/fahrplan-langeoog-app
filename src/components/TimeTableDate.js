import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const TimeTableDate = props => (
  <View style={styles.containerStyle}>
    <Text style={styles.TextStyle}>{props.date}</Text>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    padding: 11,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1'
  },
  TextStyle: {
    fontSize: 18,
    color: '#3D3D3D'
  }
});

export default TimeTableDate;
