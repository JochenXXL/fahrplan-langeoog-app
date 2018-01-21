import { Navigation } from 'react-native-navigation';

import SettingsTabScreen from './SettingsTabScreen';
import TimeTableTabScreen from './TimeTableTabScreen';
import DatePickerTabScreen from './DatePickerTabScreen';
import SchiffahrtLangeoogScreen from './SchiffahrtLangeoogScreen';
import MSFlinthoernScreen from './MSFlinthoernScreen';

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
  Navigation.registerComponent(
    'fpl.SchiffahrtLangeoogScreen',
    () => SchiffahrtLangeoogScreen
  );
  Navigation.registerComponent(
    'fpl.MSFlinthoernScreen',
    () => MSFlinthoernScreen
  );
}
