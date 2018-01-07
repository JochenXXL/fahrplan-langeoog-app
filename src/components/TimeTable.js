import React, { Component } from 'react';
import { FlatList, ScrollView, Text } from 'react-native';

import ListItem from './common/ListItem';
import TimeTableDescription from './TimeTableDescription';

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
        console.log(`should fetch this date:${this.props.date}`);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ScrollView>
        <Text>{console.log(this.props.date)}</Text>
        <TimeTableDescription />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <ListItem item={item} />}
          style={{ paddingBottom: 20 }}
        />
      </ScrollView>
    );
  }
}

export default TimeTable;
