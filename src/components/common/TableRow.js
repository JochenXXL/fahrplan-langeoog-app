import React from 'react';

import { View, StyleSheet } from 'react-native';

const TableRow = ({ children }) => (
  <View style={styles.tableRowStyle}>{children}</View>
);

const styles = StyleSheet.create({
  tableRowStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1',
    flexDirection: 'row',
    margin: 5
  }
});

export default TableRow;
