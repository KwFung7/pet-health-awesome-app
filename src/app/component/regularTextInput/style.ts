import styled from 'styled-components/native';

import COLOR from '../../constant/color';
import normalize from '../../util/normalize';

export const ErrorAlertIcon = require('../../../assets/images/icon/iconMessageError.png');
export const SuccessStrokeIcon = require('../../../assets/images/icon/iconMessageSuccess.png');
export const EyeOnIcon = require('../../../assets/images/icon/iconFieldsEyeOn.png');
export const EyeOffIcon = require('../../../assets/images/icon/iconFieldsEyeOff.png');

export const NormalTextInputView = styled.View<any>`
  width: ${props => props.width};
  height: ${props => props.height}px;
  margin-left: ${props => props.marginLeft}px;
  border-radius: ${props => props.bordetRadius};
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  /* isError */
  border: ${props => props.border};
`;

export const NormalTextInput = styled.TextInput<any>`
  font-size: ${props => props.fontSize}px;
  flex: 1;
  opacity: ${props => (props.editable ? 1 : 0.3)};
`;

export const TouchableOpacityItem = styled.Pressable``;

export const BottomTip = styled.View`
  position: absolute;
  top: ${normalize(-20)}px;
  right: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BottomTipText = styled.Text`
  font-size: ${normalize(17)}px;
  color: ${COLOR.CARNATION_PINK};
  text-align: right;
  margin-left: 4px;
`;
