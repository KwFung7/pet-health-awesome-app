import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import COLOR from '../../constant/color';
import {
  SuccessStrokeIcon,
  NormalTextInputView,
  NormalTextInput,
  TouchableOpacityItem,
  BottomTip,
  BottomTipText,
  ErrorAlertIcon,
} from './style';
import normalize from '../../util/normalize';

export default function RegularTextInput(props) {
  const {
    placeholder, // Placeholder text
    editable = true, // Whether it's editable, false means not editable
    password, // If true, indicates a password input field. Text is visible
    secureTextEntry = false, // true: Hide input content like a password field
    defaultValue, // Default string value for the TextInput component
    maxLength, // Maximum number of characters that can be entered
    placeholderTextColor = COLOR.SLATE_GRAY, // Color of the placeholder text
    width = '100%',
    height = normalize(48),
    marginLeft = 0,
    backgroundColor = COLOR.WHITE,
    bordetRadius = 28,
    fontSize = normalize(19),
    paddingLeft = normalize(16),
    paddingRight = normalize(16),
    iconArr = [],
    borderColor,
    isShowTypeIcon = false,
    errorTip,
    type = 'none', // none / success / error
    // onChange, // Called when text changes. Receives an event parameter, can get user input string via event.nativeEvent.text. event=>console.log(event.nativeEvent.text)
    onChangeText, // Called when text changes. Directly receives the user input string. text=>console.log(text)
    onEndEditing, // Called when editing ends. Receives an event parameter.
    onBlur, // Triggered when focus is lost (after onEndEditing). Receives an event parameter.
    onFocus, // Triggered when focus is gained. Receives an event parameter.
    // onSubmitEditing, // Triggered when the submit button on the keyboard is pressed after editing ends. Receives an event parameter.
    // onSelectionChange, // Triggered when the user's selection in the text input changes. Receives an event parameter. event.nativeEvent.selection.start and event.nativeEvent.selection.end
    // onKeyPress, // (iOS only) Called when a key is pressed while the TextInput is focused. This callback is called before the onChange callback.
    // onContentSizeChange, // Triggered when the number of character lines in the TextInput component changes. Thus, this callback is only valid for multiline TextInput components. Its parameter is an object from which we can get the new width and height of the current TextInput component. nativeEvent: {contentSize: {width: number, height: number}}
    // onScroll, // Called when the TextInput component scrolls. Its parameter is an object from which we can get the current scroll position of the component. nativeEvent: {contentOffset: {x: number, y: number}}
    keyboardType, // default / number-pad / decimal-pad / numeric / email-address / phone-pad
    textContentType // Only supported in iOS
  } = props;

  const [ShowTypeTip, setShowTypeTip] = useState(isShowTypeIcon);
  const [Border, setBorder] = useState(borderColor);

  // useEffect(() => {
  //   setShowTypeTip(()=>isShowTypeIcon);
  // }, [isShowTypeIcon]);

  useEffect(() => {
    if (type === 'none') {
      setShowTypeTip(() => false);
    } else {
      setShowTypeTip(() => isShowTypeIcon);
    }
  }, [isShowTypeIcon, type]);

  useEffect(() => {
    if (type === 'error') {
      setBorder(() => `1px solid ${COLOR.CARNATION_PINK}`);
    } else if (!!borderColor) {
      setBorder(() => `1px solid ${borderColor}`);
    } else {
      setBorder(() => 'none');
    }
  }, [borderColor, type]);

  function handleFocus(e) {
    if (type !== 'error') {
      setBorder(() => `1px solid ${COLOR.RED_PANTONE}`);
    }
    !!onFocus && onFocus(e);
  }

  function handleBlur(e) {
    if (type !== 'error') {
      setBorder(() => 'none');
    }
    !!onBlur && onBlur(e);
  }

  function handleEndEditing(e) {
    !!onEndEditing && onEndEditing(e);
  }

  return (
    <>
      {type === 'error' && !!errorTip && (
        <BottomTip>
          <Image style={{ height: normalize(16), width: normalize(16) }} source={ErrorAlertIcon} />
          <BottomTipText>{errorTip}</BottomTipText>
        </BottomTip>
      )}
      <NormalTextInputView
        width={width}
        height={height}
        border={Border}
        marginLeft={marginLeft}
        iconArrLen={iconArr.length}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        backgroundColor={backgroundColor}
        bordetRadius={bordetRadius}>
        <NormalTextInput
          placeholder={placeholder}
          editable={editable}
          password={password}
          secureTextEntry={secureTextEntry}
          defaultValue={defaultValue}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor}
          fontSize={fontSize}
          keyboardType={keyboardType}
          textContentType={textContentType}
          onEndEditing={e => handleEndEditing(e)}
          onChangeText={e => onChangeText(e)}
          isShowTypeTip={!!ShowTypeTip && type === 'error'}
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
        />
        {type === 'success' && (
          <TouchableOpacityItem>
            <Image source={SuccessStrokeIcon} style={{ width: normalize(32), height: normalize(32) }} />
          </TouchableOpacityItem>
        )}
        {!!iconArr.length &&
          iconArr.map((item, index) => (
            <TouchableOpacityItem
              key={index}
              onPress={() => !!item.onPress && item.onPress()}>
              <Image source={item.icon} />
            </TouchableOpacityItem>
          ))}
      </NormalTextInputView>
    </>
  );
}
