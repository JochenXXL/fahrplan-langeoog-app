import { Navigation } from 'react-native-navigation';

import BensersielTabScreen from './BensersielTabScreen';
import LangeoogTabScreen from './LangeoogTabScreen';
import SettingsTabScreen from './SettingsTabScreen';
import TimeTableTabScreen from './TimeTableTabScreen';

// register main screens
export function registerScreens() {
  Navigation.registerComponent(
    'fpl.BensersielTabScreen',
    () => BensersielTabScreen
  );
  Navigation.registerComponent(
    'fpl.LangeoogTabScreen',
    () => LangeoogTabScreen
  );
  Navigation.registerComponent(
    'fpl.SettingsTabScreen',
    () => SettingsTabScreen
  );
  Navigation.registerComponent(
    'fpl.TimeTableTabScreen',
    () => TimeTableTabScreen
  );
}
