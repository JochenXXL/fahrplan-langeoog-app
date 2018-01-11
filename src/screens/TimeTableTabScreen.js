/* global alert:true */
import React, { Component } from 'react';
import { View } from 'react-native';

import TimeTableDate from '../components/TimeTableDate';
import TimeTable from '../components/TimeTable';

class TimeTableTabScreen extends Component {
  render() {
    console.log('loaded timetable');
    return (
      <View>
        <TimeTableDate date={'11. Januar 2018'} />
        <TimeTable date={this.props.date} location="Bensersiel" />
      </View>
    );
  }
}

export default TimeTableTabScreen;
