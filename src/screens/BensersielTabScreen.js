/* global alert:true */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Container from '../components/common/Container';
import TopNav from '../components/TopNav';

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
      content = <Text>Fahrplan Bensersiel heute</Text>;
    } else if (this.state.tabs.tomorrow) {
      content = <Text>Fahrplan Bensersiel morgen</Text>;
    } else {
      content = <Text>Fahrplan Bensersiel Datum wählen</Text>;
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
