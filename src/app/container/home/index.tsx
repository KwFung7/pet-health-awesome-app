import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import Config from 'react-native-config';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ExampleText} from './style';
import {exampleAction} from '../../actions/home';

interface HomeProps {
  navigation: NavigationProp<ParamListBase>;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const {t} = useTranslation();
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
