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
      animationType: 'slide-horizontal' //, temporary disabled share button
      // rightButtons: [
      //   {
      //     icon: require('../assets/share.png'), //if you want an image button
      //     id: 'share', // id of the button which will pass to your press event handler. See the section bellow for Android specific button ids
      //     buttonColor: 'white' // Set color for the button (can also be used in setButtons function to set different button style programatically)
      //   }
      // ]
    });
    console.log(formatDateApi(date));
  }

  render() {
    return (
      <ScrollView style={styles.containerStyle}>
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
  containerStyle: {
    backgroundColor: '#ffffff',
    height: '100%'
  }
});

export default DatePicker;
