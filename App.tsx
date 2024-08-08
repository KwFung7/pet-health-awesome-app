import React, {useRef} from 'react';
import {Provider} from 'react-redux';
import store from './src/app/store/index';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/app/navigator/index';
import {Host} from 'react-native-portalize';
import './src/app/util/i18n/index';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const routeNameRef = useRef<string | undefined>();
  const navigationRef = useRef<any>(null);

  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName =
            navigationRef.current?.getCurrentRoute()?.name;

          console.log('Navigation Change:');
          console.log(`Previous Route: ${previousRouteName}`);
          console.log(`Current Route: ${currentRouteName}`);
          console.log(`Timestamp: ${new Date().toISOString()}`);

          if (previousRouteName !== currentRouteName) {
            console.log('Route changed. Logging screen view...');
            // Uncomment the following block when analytics is set up
            // await analytics().logScreenView({
            //   screen_name: currentRouteName,
            //   screen_class: currentRouteName,
            // });
          } else {
            console.log('Route remained the same. No screen view logged.');
          }

          routeNameRef.current = currentRouteName;
        }}>
        <Host>
          <RootNavigator />
        </Host>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
