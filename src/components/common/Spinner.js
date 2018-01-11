import React from 'react';

import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = () => (
  <View style={styles.spinnerContainer}>
    <ActivityIndicator size="large" color="#6b77c2" />
  </View>
);

const styles = StyleSheet.create({
  spinnerContainer: {
    paddingTop: 20
  }
});

export default Spinner;
