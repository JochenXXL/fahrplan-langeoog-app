import React from 'react';

import { View, StyleSheet } from 'react-native';

const Table = ({ children }) => (
  <View style={styles.tableStyle}>{children}</View>
);

const styles = StyleSheet.create({
  tableStyle: {
    margin: 5,
    backgroundColor: '#f3f3f3'
  }
});

export default Table;
