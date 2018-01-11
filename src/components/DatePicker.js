import React, { Component } from 'react';
import { View } from 'react-native';
import DatePickerComp from 'react-native-datepicker';
import TimeTable from './TimeTable';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: '' };
  }

  render() {
    let timeTable = <View />;

    if (this.state.date !== '') {
      timeTable = <TimeTable date={this.state.date} location="Bensersiel" />;
    }

    return (
      <View>
        <DatePickerComp
          style={{ width: 200 }}
          date={this.state.date}
          mode="date"
          androidMode="calendar"
          placeholder="Datum wählen"
          format="DD-MM-YYYY"
          minDate="11-01-2018"
          maxDate="11-01-2019"
          showIcon={false}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={date => {
            this.setState({ date });
          }}
        />
        {timeTable}
      </View>
    );
  }
}

export default DatePicker;
