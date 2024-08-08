import React, {useState} from 'react';
import {
  StatusBar,
  Platform,
  TouchableOpacity,
  StatusBarStyle,
} from 'react-native';
import COLOR from '../../constant/color';
import * as CONSTANT from '../../constant/index';
import {
  LeftBtnImage,
  NavSafeAreaView,
  NavBarView,
  TitleView,
  TitleText,
  HandleView,
} from './style';

interface StatusBarShape {
  backgroundColor: string;
  barStyle: StatusBarStyle;
  hidden: boolean;
  translucent: boolean;
}

interface NavigationHeaderBarProps {
  backgroundColor?: string;
  title?: string;
  navigation?: any;
  MainNavigation?: React.ReactNode;
  LeftButton?: React.ReactNode;
  RightButton?: React.ReactNode;
  color?: string;
  TopStatusBar?: StatusBarShape;
  isShowleftButton?: boolean;
  leftButtonIcon?: any;
  onPress?: () => void;
}

const NavigationHeaderBar: React.FC<NavigationHeaderBarProps> = ({
  backgroundColor = COLOR.SAFFRON,
  title,
  navigation,
  MainNavigation,
  LeftButton,
  RightButton,
  color = COLOR.EERIE_BLACK,
  TopStatusBar = {
    backgroundColor: backgroundColor,
    barStyle: 'dark-content',
    hidden: false,
    translucent: false,
  },
  isShowleftButton = true,
  leftButtonIcon,
  onPress = () => navigation?.goBack(),
}: NavigationHeaderBarProps) => {
  const statusBarHeight = StatusBar.currentHeight || 0;

  const [LeftBtnIcon] = useState<any>();

  return (
    <NavSafeAreaView backgroundColor={backgroundColor}>
      <StatusBar {...TopStatusBar} />
      <NavBarView
        marginTop={TopStatusBar.translucent ? statusBarHeight : 0}
        backgroundColor={backgroundColor}
        height={
          Platform.OS.toLowerCase() === 'ios'
            ? CONSTANT.NAV_BAR_HEIGHT_IOS
            : CONSTANT.NAV_BAR_HEIGHT_ANDROID
        }>
        <TitleView>
          {MainNavigation ? (
            MainNavigation
          ) : (
            <TitleText color={color}>{title}</TitleText>
          )}
        </TitleView>
        <HandleView>
          {isShowleftButton &&
            (LeftButton ? (
              LeftButton
            ) : (
              <TouchableOpacity onPress={onPress}>
                <LeftBtnImage
                  source={leftButtonIcon ? leftButtonIcon : LeftBtnIcon}
                />
              </TouchableOpacity>
            ))}
          {RightButton && RightButton}
        </HandleView>
      </NavBarView>
    </NavSafeAreaView>
  );
};

export default NavigationHeaderBar;
