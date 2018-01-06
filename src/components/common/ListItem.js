import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListItem = ({ item }) => (
  <View style={styles.itemContainerStyle}>
    <View style={styles.timeContainerStyle}>
      <Text style={styles.textStyle}>{item.time}</Text>
    </View>
    <View style={styles.companyContainerStyle}>
      <Text style={styles.textStyle}>{item.company}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainerStyle: {
    borderColor: '#DCDCDC',
    borderWidth: 1,
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
