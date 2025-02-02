/**
 * @format
 */
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (__DEV__) {
  Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({}) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  console.log('Reactotron Configured');
}

AppRegistry.registerComponent(appName, () => App);
