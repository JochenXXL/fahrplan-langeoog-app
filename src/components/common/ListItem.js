import React from 'react';
import { Text, View } from 'react-native';

const ListItem = ({ item }) => (
  <View>
    <Text>{item.time}</Text>
    <Text>{item.company}</Text>
  </View>
);

export default ListItem;
