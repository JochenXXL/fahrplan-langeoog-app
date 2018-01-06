import React from 'react';
import { View, FlatList } from 'react-native';

import ListItem from './common/ListItem';
import TimeTableDescription from './TimeTableDescription';

const data = [
  { key: '1', time: '07:10', company: 'SL' },
  { key: '2', time: '09:30', company: 'DW' },
  { key: '1', time: '09:30', company: 'SL' },
  { key: '2', time: '11:30', company: 'SL' },
  { key: '1', time: '16:00', company: 'DW' },
  { key: '2', time: '16:00', company: 'SL' }
];

const TimeTable = ({ day, location }) => (
  <View>
    <TimeTableDescription />
    <FlatList data={data} renderItem={({ item }) => <ListItem item={item} />} />
  </View>
);

export default TimeTable;
