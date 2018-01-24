/* global alert:true */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { captureScreen } from 'react-native-view-shot';
import { AdMobBanner } from 'react-native-admob';

import TimeTableDate from '../components/TimeTableDate';
import TimeTable from '../components/TimeTable';
import BottomAdd from '../components/BottomAdd';

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
      <View style={{ flex: 1 }}>
        <TimeTableDate date={this.props.date} />
        <View style={{ flex: 1 }}>
          <TimeTable
            date={this.props.date}
            location={this.props.location}
            navigator={this.props.navigator}
          />
        </View>

        <BottomAdd />
      </View>
    );
  }
}

export default TimeTableTabScreen;
