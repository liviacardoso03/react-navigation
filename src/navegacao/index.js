import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';

// import Drawer from './Drawer';
// import Stack from './Stack';
import Tab from './Tab';

LogBox.ignoreLogs(['Reanimated 2']);

export default props => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      {/* <Drawer /> */}
      <Tab />
      {/* <Stack /> */}
    </NavigationContainer>
  </SafeAreaView>
);
