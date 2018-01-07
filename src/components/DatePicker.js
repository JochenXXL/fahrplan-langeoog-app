import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DatePicker extends Component {
  state = {};

  render() {
    return (
      <View>
        <Text>DatePicker {this.props.location}</Text>
        <Button onPress={() => console.log('pressed')} title="Datepicker" />
      </View>
    );
  }
}

export default DatePicker;
