import React from 'react';
import {View, Animated} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {setLoadingAnimation} from '../../util/common';
import {styles} from './style';
import loadingIcon from '../../../assets/images/icon/iconTechnologyLoadingOverLight.png';
import normalize from '../../util/normalize';

interface LoadingViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const LoadingView = (props: LoadingViewProps) => {
  const spin = setLoadingAnimation();

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          height: normalize(64),
          width: normalize(64),
          transform: [{rotate: spin}],
        }}
        source={loadingIcon}
      />
    </View>
  );
};

export default LoadingView;
