import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Bensersiel',
      screen: 'fpl.BensersielTabScreen',
      icon: require('./assets/home.png'),
      title: 'Abfahrt Bensersiel',
      topTabs: [
        {
          screenId: 'fpl.TestScreen',
          title: 'Tab One'
        },
        {
          screenId: 'fpl.TestScreen',
          title: 'Tab Two'
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
