import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ExampleText } from './style';
import Config from 'react-native-config';

const Home = props => {
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <ExampleText>{t('app_name')} - Home Screen Testing</ExampleText>
      <ExampleText>{Config.TEST_REACT_CONFIG}</ExampleText>
    </SafeAreaView>
  );
};

export default Home;
