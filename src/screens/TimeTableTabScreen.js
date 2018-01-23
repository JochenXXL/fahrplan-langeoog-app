/* global alert:true */
import React, { Component } from 'react';
import { View } from 'react-native';
import { captureScreen } from 'react-native-view-shot';

import TimeTableDate from '../components/TimeTableDate';
import TimeTable from '../components/TimeTable';

class TimeTableTabScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'share') {
      console.log('lets share this screen');
      captureScreen({
        format: 'jpg',
        quality: 0.8
      }).then(
        uri => console.log('Image saved to', uri),
        error => console.error('Oops, snapshot failed', error)
      );
    }
  }

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
