/* global alert:true */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Container from '../components/common/Container';
import TimeTable from '../components/TimeTable';

class TimeTableTabScreen extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.date.toString()}</Text>
        <Container>
          <TimeTable date={this.props.date} location="Bensersiel" />
        </Container>
      </View>
    );
  }
}

export default TimeTableTabScreen;
