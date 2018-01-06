import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Container from '../components/common/Container';
import TopNav from '../components/TopNav';

class LangeoogTabScreen extends Component {
  render() {
    return (
      <View>
        <TopNav />
        <Container>
          <Text>Hello Langeoog</Text>
        </Container>
      </View>
    );
  }
}

export default LangeoogTabScreen;
