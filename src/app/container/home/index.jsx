import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Config from 'react-native-config';

const Home = props => {
  return (
    <SafeAreaView>
      <Text>Home Screen Testing</Text>
      <Text>{Config.TEST_REACT_CONFIG}</Text>
    </SafeAreaView>
  );
};

export default Home;
