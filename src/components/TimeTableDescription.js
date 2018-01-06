import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimeTableDescription = () => (
  <View style={styles.constainerStyle}>
    <View
      style={[styles.companyContainerStyle, { borderLeftColor: '#531DFF' }]}
    >
      <Text style={styles.textStyle}>Schiffahrt Langeoog</Text>
    </View>
    <View
      style={[styles.companyContainerStyle, { borderLeftColor: '#FFAA00' }]}
    >
      <Text style={styles.textStyle}>MS Flinthörn</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  constainerStyle: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 12
  },
  companyContainerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderLeftWidth: 5,
    justifyContent: 'space-between',
    marginLeft: 3,
    paddingLeft: 5
  },
  textStyle: {
    fontSize: 16
  }
});

export default TimeTableDescription;
