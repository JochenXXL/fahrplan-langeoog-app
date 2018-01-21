import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class ListItem extends Component {
  onPress = () => {
    const { company } = this.props.item;

    if (company === 'SL') {
      this.props.navigator.showModal({
        screen: 'fpl.SchiffahrtLangeoogScreen',
        title: 'Schiffahrt Langeoog'
      });
    } else {
      this.props.navigator.showModal({
        screen: 'fpl.MSFlinthoernScreen',
        title: 'MS-Flinthörn'
      });
    }
  };

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.containerStyle}>
          <View style={styles.leftColStyle}>
            <Text style={styles.timeStyle}>{item.time}</Text>
            <Text style={styles.locationStyle}>ab Hafen</Text>
          </View>
          <View style={styles.centerColStyle}>
            <Text style={styles.companyStyle}>
              {item.company === 'SL' ? 'Schiffahrt Langeoog' : 'MS-Flinthörn'}
            </Text>
          </View>
          <View style={styles.rightColStyle}>
            <Text>Info</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D1'
  },
  leftColStyle: {
    flex: 1,
    alignItems: 'center'
  },
  centerColStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightColStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeStyle: {
    fontSize: 24,
    color: '#303030'
  },
  locationStyle: {
    fontSize: 12,
    color: '#4D4D4D'
  },
  companyStyle: {
    fontSize: 14,
    color: '#4D4D4D'
  }
});

export default ListItem;
