/* global alert:true */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Container from '../components/common/Container';
import TopNav from '../components/TopNav';

class BensersielTabScreen extends Component {
  render() {
    return (
      <View>
        <TopNav
          showToday={() => alert('Heute Bensersiel')}
          showTomorrow={() => alert('Morgen Bensersiel')}
          showPicker={() => alert('Datum Bensersiel')}
        />
        <Container>
          <Text>Hello Bensersiel</Text>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default BensersielTabScreen;
