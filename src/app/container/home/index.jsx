import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ExampleText } from './style';
import Config from 'react-native-config';
import { exampleAction } from '../../actions/home';

const Home = props => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exampleAction());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <ExampleText>{t('app_name')} - Home Screen Testing</ExampleText>
      <ExampleText>{Config.TEST_REACT_CONFIG}</ExampleText>
    </SafeAreaView>
  );
};

export default Home;
