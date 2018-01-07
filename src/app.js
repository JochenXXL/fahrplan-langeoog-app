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
      screen: 'fpl.BensersielTabScreen',
      icon: require('./assets/home.png'),
      title: 'Abfahrt Bensersiel',
      topTabs: [
        {
          screenId: 'fpl.TimeTableTabScreen',
          title: 'Heute',
          passProps: {
            date: today
          }
        },
        {
          screenId: 'fpl.TimeTableTabScreen',
          title: 'Morgen',
          passProps: {
            date: tomorrow
          }
        }
      ]
    },
    {
      label: 'Langeoog',
      screen: 'fpl.LangeoogTabScreen',
      icon: require('./assets/home.png'),
      title: 'Abfahrt Langeoog'
    },
    {
      label: 'Einstellungen',
      screen: 'fpl.SettingsTabScreen',
      icon: require('./assets/home.png'),
      title: 'Einstellungen'
    }
  ]
});
