import React, {useState, useEffect} from 'react';
import { StatusBar, Platform, TouchableOpacity } from 'react-native';
import * as CONSTANT from '../../constant/index';

import { LeftBtnImage, NavSafeAreaView, NavBarView, TitleView, TitleText, HandleView } from './style';

export default function NavigationHeaderBar(props) {

  const statusBarHeight = StatusBar.currentHeight;

  const { backgroundColor = CONSTANT.COLORS.GENKI_YELLOW } = props;

  const StatusBarShape = {
    // Set status bar
    backgroundColor: backgroundColor, // string: Set the color of the status bar
    barStyle: 'dark-content', // 'default', 'light-content', 'dark-content' Status bar style, iOS default is white background with black text, Android default is black background with white text
    hidden: false, // bool: Whether the status bar is hidden
    translucent: false, // bool: Specify whether the status bar is transparent. true: The app will render under the status bar (immersive, partially covered by the status bar). Often used with a semi-transparent background color for the status bar.
  };

  const {
    title,
    navigation,
    MainNavigation,
    LeftButton, //element;
    RightButton, //element;
    color = CONSTANT.COLORS.BLACK,
    TopStatusBar = StatusBarShape,
    isShowleftButton = true,
    // isShowRightButton = false,
    leftButtonIcon,
    leftButtonIconType = 'Exit',
    onPress = () => navigation.goBack(),
  } = props;

  const [LeftBtnIcon] = useState();

  useEffect(() => {
    // if (leftButtonIconType === 'Exit') {
    //   setLeftBtnIcon(()=>LeftButonImgExit);
    // }
    // if (leftButtonIconType === 'Back') {
    //   setLeftBtnIcon(()=>LeftButonImgBack);
    // }
  }, [leftButtonIconType]);

  const LeftBtnView = () => {
    return (
      <TouchableOpacity onPress={() => onPress()}>
        <LeftBtnImage source={!!leftButtonIcon ? leftButtonIcon : LeftBtnIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <NavSafeAreaView backgroundColor={backgroundColor}>
      <StatusBar {...TopStatusBar} />
      <NavBarView
        marginTop={StatusBarShape.translucent ? statusBarHeight : 0}
        backgroundColor={backgroundColor}
        height={
          Platform.OS.toLocaleLowerCase() === 'ios'
            ? CONSTANT.NAV_BAR_HEIGHT_IOS
            : CONSTANT.NAV_BAR_HEIGHT_ANDROID
        }>
        <TitleView>
          {!!MainNavigation ? MainNavigation : <TitleText color={color}>{title}</TitleText>}
        </TitleView>
        <HandleView>
          {!!isShowleftButton && (LeftButton ? LeftButton : <LeftBtnView />)}
          {!!RightButton && RightButton}
        </HandleView>
      </NavBarView>
    </NavSafeAreaView>
  );
}
