import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListItem = ({ item }) => (
  <View
    style={[
      styles.itemContainerStyle,
      item.company === 'SL'
        ? { borderLeftColor: '#531DFF' }
        : { borderLeftColor: '#FFAA00' }
    ]}
  >
    <View style={styles.timeContainerStyle}>
      <Text style={styles.textStyle}>{item.time}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainerStyle: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#D3D3D3',
    borderRightColor: '#D3D3D3',
    borderBottomColor: '#D3D3D3',
    borderLeftWidth: 5,
    flexDirection: 'row',
    padding: 5,
    margin: 1,
    backgroundColor: 'white'
  },
  timeContainerStyle: {
    flex: 3,
    alignItems: 'center'
  },
  companyContainerStyle: {
    flex: 1,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 18
  }
});

export default ListItem;
