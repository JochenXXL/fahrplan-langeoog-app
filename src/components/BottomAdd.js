import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

const BottomAdd = () => (
  <View style={styles.bottomAddStyle}>
    <AdMobBanner
      adSize="smartBanner"
      adUnitID="ca-app-pub-8741291600421705/6216591044"
      testDevices={[AdMobBanner.simulatorId]}
      onAdFailedToLoad={error => console.error(error)}
    />
  </View>
);

const styles = StyleSheet.create({
  bottomAddStyle: {
    backgroundColor: 'white',
    paddingTop: 3
  }
});

export default BottomAdd;
