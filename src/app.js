import { PixelRatio } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Bensersiel',
      screen: 'fpl.TimeTableTabScreen',
      icon: require('./assets/App_Icon_windraeder_Bensersiel.png'),
      title: 'Abfahrt Bensersiel',
      topTabs: [
        {
          screenId: 'fpl.TimeTableTabScreen',
          title: 'Heute',
          passProps: {
            date: today,
            location: 'Bensersiel'
          }
        },
        {
          screenId: 'fpl.TimeTableTabScreen',
          title: 'Morgen',
          passProps: {
            date: tomorrow,
            location: 'Bensersiel'
          }
        },
        {
          screenId: 'fpl.DatePickerTabScreen',
          title: 'Datum',
          passProps: {
            location: 'Bensersiel'
          }
        }
      ]
    },
    {
      label: 'Langeoog',
      screen: 'fpl.TimeTableTabScreen',
      icon: require('./assets/App_Icon_Turm.png'),
      title: 'Abfahrt Langeoog',
      topTabs: [
        {
          screenId: 'fpl.TimeTableTabScreen',
          title: 'Heute',
          passProps: {
            date: today,
            location: 'Langeoog'
          }
        },
        {
          screenId: 'fpl.TimeTableTabScreen',
          title: 'Morgen',
          passProps: {
            date: tomorrow,
            location: 'Langeoog'
          }
        },
        {
          screenId: 'fpl.DatePickerTabScreen',
          title: 'Datum',
          passProps: {
            location: 'Langeoog'
          }
        }
      ]
    },
    {
      label: 'Info',
      screen: 'fpl.SettingsTabScreen',
      icon: require('./assets/App_Icon_Info.png'),
      title: 'Information'
    }
  ],
  appStyle: {
    navBarTextColor: '#FFFFFF',
    navBarBackgroundColor: '#3a4c91',
    navBarTextFontSize: 20,
    navBarTitleTextCentered: true,
    navBarButtonColor: '#ffffff',
    statusBarColor: '#002563',
    topTabsHeight: 30,
    navBarHeight: 45,
    tabBarBackgroundColor: '#ffffff',
    tabBarButtonColor: '#6b77c2',
    tabBarSelectedButtonColor: '#002563',
    topBarBorderColor: '#3a4c91',
    topTabTextColor: '#9ca5c8',
    selectedTopTabTextColor: '#e5e5e5',
    selectedTopTabIndicatorHeight: PixelRatio.get() * 2,
    selectedTopTabIndicatorColor: '#ffffff'
  }
});
