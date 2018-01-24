import React, { Component } from 'react';
import { View } from 'react-native';

import DatePicker from '../components/DatePicker';
import BottomAdd from '../components/BottomAdd';

class DatePickerTabScreen extends Component {
  render() {
    const { location, navigator } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <DatePicker location={location} navigator={navigator} />
        </View>

        <BottomAdd />
      </View>
    );
  }
}

export default DatePickerTabScreen;
