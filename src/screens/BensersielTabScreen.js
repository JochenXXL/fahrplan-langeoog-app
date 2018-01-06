/* global alert:true */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import TopNav from '../components/TopNav';
import Container from '../components/common/Container';
import TimeTable from '../components/TimeTable';
import DatePicker from '../components/DatePicker';

class BensersielTabScreen extends Component {
  state = {
    tabs: {
      today: true,
      tomorrow: false,
      picker: false
    }
  };

  showToday = () => {
    this.setState({
      tabs: {
        today: true,
        tomorrow: false,
        picker: false
      }
    });
  };

  showTomorrow = () => {
    this.setState({
      tabs: {
        today: false,
        tomorrow: true,
        picker: false
      }
    });
  };

  showPicker = () => {
    this.setState({
      tabs: {
        today: false,
        tomorrow: false,
        picker: true
      }
    });
  };

  render() {
    let content = <Text>Fahrplan Bensersiel heute</Text>;

    if (this.state.tabs.today) {
      content = <TimeTable day="today" location="Bensersiel" />;
    } else if (this.state.tabs.tomorrow) {
      content = <TimeTable day="tomorrow" location="Bensersiel" />;
    } else {
      content = <DatePicker location="Bensersiel" />;
    }

    return (
      <View>
        <TopNav
          showToday={this.showToday}
          showTomorrow={this.showTomorrow}
          showPicker={this.showPicker}
        />
        <Container>{content}</Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default BensersielTabScreen;
