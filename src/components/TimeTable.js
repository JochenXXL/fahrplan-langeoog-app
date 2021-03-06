import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';

import Spinner from '../components/common/Spinner';
import ListItem from './common/ListItem';
import { formatDateApi } from '../formatDate';

class TimeTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentWillMount() {
    const dateFormatted = formatDateApi(this.props.date);

    fetch(
      `http://fahrplan-langeoog.de/api/timetable.php?location=${
        this.props.location
      }&date=${dateFormatted}`
    )
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
        renderItem={({ item }) => (
          <ListItem
            item={item}
            navigator={this.props.navigator}
            location={this.props.location}
          />
        )}
        style={{ paddingBottom: 10 }}
      />
    );

    if (this.state.isLoading) {
      content = <Spinner />;
    }

    return <ScrollView>{content}</ScrollView>;
  }
}

export default TimeTable;
