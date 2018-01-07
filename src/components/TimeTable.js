import React, { Component } from 'react';
import { FlatList, ScrollView, Text } from 'react-native';

import ListItem from './common/ListItem';

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
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <ListItem item={item} />}
          style={{ paddingBottom: 60 }}
        />
      </ScrollView>
    );
  }
}

export default TimeTable;
