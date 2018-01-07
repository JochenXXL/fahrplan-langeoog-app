import { Navigation } from 'react-native-navigation';

import SettingsTabScreen from './SettingsTabScreen';
import TimeTableTabScreen from './TimeTableTabScreen';
import DatePickerTabScreen from './DatePickerTabScreen';

// register main screens
export function registerScreens() {
  Navigation.registerComponent(
    'fpl.SettingsTabScreen',
    () => SettingsTabScreen
  );
  Navigation.registerComponent(
    'fpl.TimeTableTabScreen',
    () => TimeTableTabScreen
  );
  Navigation.registerComponent(
    'fpl.DatePickerTabScreen',
    () => DatePickerTabScreen
  );
}
