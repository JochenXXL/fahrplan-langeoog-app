import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const TableRowItem = props => {
  let itemStyle = {};
  if (props.left) {
    itemStyle = {
      flex: 4
    };
  } else {
    itemStyle = {
      flex: 1,
      alignItems: 'flex-end',
      paddingRight: 5
    };
  }

  return (
    <View style={[styles.tableRowItemStyle, itemStyle]}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tableRowItemStyle: {
    padding: 5
  },
  textStyle: {
    fontSize: 14,
    color: '#4D4D4D'
  }
});

export default TableRowItem;
