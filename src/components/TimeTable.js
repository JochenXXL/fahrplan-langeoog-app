import React from 'react';
import { View, Text, FlatList } from 'react-native';

const TimeTable = ({ day, location }) => (
  <View>
    <Text>
      Timetable {location} {day}
    </Text>
    <FlatList
      data={[{ time: '9:00', company: 'SL' }, { time: '11:00', company: 'DW' }]}
      renderItem={({ item }) => (
        <View>
          <Text>{item.time}</Text>
          <Text>{item.company}</Text>
        </View>
      )}
    />
  </View>
);

export default TimeTable;
