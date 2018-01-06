import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';

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
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ScrollView>
        <TimeTableDescription />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </ScrollView>
    );
  }
}

export default TimeTable;
