import { Navigation } from 'react-native-navigation';

import BensersielTabScreen from './BensersielTabScreen';
import LangeoogTabScreen from './LangeoogTabScreen';
import SettingsTabScreen from './SettingsTabScreen';

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
}
