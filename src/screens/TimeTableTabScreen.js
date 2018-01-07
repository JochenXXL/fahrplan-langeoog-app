/* global alert:true */
import React, { Component } from 'react';
import { View } from 'react-native';

import Container from '../components/common/Container';
import TimeTable from '../components/TimeTable';
import TimeTableDescription from '../components/TimeTableDescription';

class TimeTableTabScreen extends Component {
  render() {
    console.log('loaded timetable');
    return (
      <View>
        <Container>
          <TimeTableDescription />
          <TimeTable date={this.props.date} location="Bensersiel" />
        </Container>
      </View>
    );
  }
}

export default TimeTableTabScreen;
