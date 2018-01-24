import React from 'react';
import { View } from 'react-native';

import { AdMobBanner } from 'react-native-admob';

const RectangleAdd = () => (
  <View style={{ alignItems: 'center' }}>
    <AdMobBanner
      adSize="mediumRectangle"
      adUnitID="ca-app-pub-8741291600421705/6216591044"
      testDevices={[AdMobBanner.simulatorId]}
      onAdFailedToLoad={error => console.error(error)}
    />
  </View>
);

export default RectangleAdd;
