import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

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
    const infoIcon = require('../../assets/App_Icon_Info.png');

    const { item } = this.props;

    let departureLocation = 'Hafen';
    const { location } = this.props;
    if (location === 'Langeoog') {
      departureLocation = 'Bahnhof';
    }

    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.containerStyle}>
          <View style={styles.leftColStyle}>
            <Text style={styles.timeStyle}>{item.time}</Text>
            <Text style={styles.locationStyle}>{departureLocation}</Text>
          </View>
          <View style={styles.centerColStyle}>
            <Text style={styles.companyStyle}>
              {item.company === 'SL' ? 'Schiffahrt Langeoog' : 'MS-Flinthörn'}
            </Text>
          </View>
          <View style={styles.rightColStyle}>
            <View style={styles.iconContainer}>
              <Image source={infoIcon} style={styles.iconStyle} />
            </View>
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
    borderBottomColor: '#D1D1D1',
    backgroundColor: '#ffffff'
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
  },
  iconContainer: {
    borderRadius: 100,
    backgroundColor: '#9D9D9D',
    padding: 5
  },
  iconStyle: {
    height: 12,
    width: 12,
    backgroundColor: '#9D9D9D',
    tintColor: '#ffffff',
    padding: 3,
    borderRadius: 10
  }
});

export default ListItem;
