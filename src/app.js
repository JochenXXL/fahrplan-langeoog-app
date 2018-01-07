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
      icon: require('./assets/home.png'),
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
      icon: require('./assets/home.png'),
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
      label: 'Einstellungen',
      screen: 'fpl.SettingsTabScreen',
      icon: require('./assets/home.png'),
      title: 'Einstellungen'
    }
  ]
});
