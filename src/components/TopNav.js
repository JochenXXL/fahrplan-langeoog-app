import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const TopNav = () => (
  <View style={styles.topNavContainerStyle}>
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => alert('hi')}
        title="Heute"
        style={styles.buttonStyle}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => alert('hi')}
        title="Morgen"
        style={styles.buttonStyle}
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => alert('hi')}
        title="Datum"
        style={styles.buttonStyle}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  topNavContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flex: 1,
    padding: 1
  },
  buttonStyle: {
    alignSelf: 'center'
  }
});

export default TopNav;
