import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import Spinner from '../components/common/Spinner';

import ListItem from './common/ListItem';

class TimeTable extends Component {
  state = {
    data: [],
    isLoading: true
  };

  componentWillMount() {
    fetch('http://fahrplan-langeoog.de/api/test.json')
      .then(res => res.json())
      .then(parsedRes => {
        this.setState({
          data: parsedRes,
          isLoading: false
        });
        console.log(`should fetch this date:${this.props.date}`);
      })
      .catch(err => console.log(err));
  }

  render() {
    let content = (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => <ListItem item={item} />}
        style={{ paddingBottom: 60 }}
      />
    );

    if (this.state.isLoading) {
      content = <Spinner />;
    }

    return <ScrollView>{content}</ScrollView>;
  }
}

export default TimeTable;
