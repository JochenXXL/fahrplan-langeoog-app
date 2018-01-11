import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales.fr = {
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

LocaleConfig.defaultLocale = 'fr';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    // reformat date to german format
    const date = new Date(day.dateString);
    const dateString = `${date.getDate()}-${date.getMonth() +
      1}-${date.getFullYear()}`;
    // set State for selected date and german date
    this.setState({
      selected: day.dateString,
      date: this.date
    });
    console.log(dateString);
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
