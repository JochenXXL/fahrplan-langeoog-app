/* global alert:true */
import React, { Component } from 'react';
import { View } from 'react-native';

import TopNav from '../components/TopNav';
import Container from '../components/common/Container';
import TimeTable from '../components/TimeTable';
import DatePicker from '../components/DatePicker';

class BensersielTabScreen extends Component {
  state = {
    selectedTab: 'today'
  };

  render() {
    let content;

    if (this.state.selectedTab === 'today' || 'tomorrow') {
      content = (
        <TimeTable day={this.state.selectedTab} location="Bensersiel" />
      );
    }

    if (this.state.selectedTab === 'picker') {
      content = <DatePicker location="Bensersiel" />;
    }

    return (
      <View>
        <TopNav
          showToday={() => {
            this.setState({ selectedTab: 'today' });
          }}
          showTomorrow={() => {
            this.setState({ selectedTab: 'tomorrow' });
          }}
          showPicker={() => {
            this.setState({ selectedTab: 'picker' });
          }}
        />

        <Container>{content}</Container>
      </View>
    );
  }
}

export default BensersielTabScreen;
