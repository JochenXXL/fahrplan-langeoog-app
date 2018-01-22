import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { formatDateApi } from '../formatDate';

LocaleConfig.locales.de = {
  monthNames: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember'
  ],
  monthNamesShort: [
    'Jan.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.'
  ],
  dayNames: [
    'Sonntag',
    'Monatag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag'
  ],
  dayNamesShort: ['Son.', 'Mon.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']
};

LocaleConfig.defaultLocale = 'de';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    // reformat date to german format
    const date = new Date(day.dateString);
    // set State for selected date and german date
    this.setState({
      selected: day.dateString,
      date: this.date
    });
    this.props.navigator.push({
      screen: 'fpl.TimeTableTabScreen',
      title: `Abfahrt ${this.props.location}`,
      passProps: {
        date,
        location: this.props.location
      },
      animationType: 'slide-horizontal'
    });
    console.log(formatDateApi(date));
  }

  render() {
    return (
      <ScrollView>
        <Calendar
          minDate={Date()}
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{ [this.state.selected]: { selected: true } }}
          theme={{
            selectedDayBackgroundColor: '#6b77c2',
            todayTextColor: '#6b77c2',
            arrowColor: '#002563'
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {}
});

export default DatePicker;
