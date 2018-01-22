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
        <TimeTableDate date={this.props.date} />
        <TimeTable
          date={this.props.date}
          location={this.props.location}
          navigator={this.props.navigator}
        />
      </View>
    );
  }
}

export default TimeTableTabScreen;
