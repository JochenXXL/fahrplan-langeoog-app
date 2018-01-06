import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import ListItem from './common/ListItem';
import TimeTableDescription from './TimeTableDescription';

// const data = [
//   { key: '1', time: '07:10', company: 'SL' },
//   { key: '2', time: '09:30', company: 'DW' },
//   { key: '1', time: '09:30', company: 'SL' },
//   { key: '2', time: '11:30', company: 'SL' },
//   { key: '1', time: '16:00', company: 'DW' },
//   { key: '2', time: '16:00', company: 'SL' }
// ];

class TimeTable extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    fetch('http://fahrplan-langeoog.de/api/test.json')
      .then(res => res.json())
      .then(parsedRes => {
        this.setState({
          data: parsedRes
        });
      });
  }

  render() {
    return (
      <View>
        <TimeTableDescription />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    );
  }
}

export default TimeTable;
