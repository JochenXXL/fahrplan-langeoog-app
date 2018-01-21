import React from 'react';

import { View, StyleSheet } from 'react-native';

const Table = ({ children }) => (
  <View style={styles.tableStyle}>{children}</View>
);

const styles = StyleSheet.create({
  tableStyle: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f3f3f3'
  }
});

export default Table;
