import React from 'react';
import { View, Text } from 'react-native';

const TimeTable = ({ day, location }) => (
  <View>
    <Text>
      Timetable {location} {day}
    </Text>
  </View>
);

export default TimeTable;
