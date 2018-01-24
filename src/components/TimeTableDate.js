import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

import { formatDatePretty } from '../formatDate';

const TimeTableDate = ({ date }) => (
  <View style={styles.containerStyle}>
    <AdMobBanner
      adSize="banner"
      adUnitID="ca-app-pub-3940256099942544/6300978111"
      testDevices={[AdMobBanner.simulatorId]}
      onAdFailedToLoad={error => console.error(error)}
    />
    <Text style={styles.TextStyle}>{formatDatePretty(date)}</Text>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 6,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
    backgroundColor: '#ffffff'
  },
  TextStyle: {
    fontSize: 16,
    color: '#3D3D3D',
    paddingBottom: 10,
    paddingTop: 5
  }
});

export default TimeTableDate;
