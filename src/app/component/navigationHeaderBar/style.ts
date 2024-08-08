import styled from 'styled-components/native';
import { Text } from 'react-native';
import * as CONSTANT from '../../constant/index';

// const LeftButonImgExit = require('../../../assets/images/general/icon30X30Exit.png');
// const LeftButonImgBack = require('../../../assets/images/general/icon30X30Back.png');

// const BoldTextFamily = styled.Text`
//   //fontFamily: ${CONSTANT.FONT_FAMILY.MEDIUM},
// `;

export const LeftBtnImage = styled.Image`
  margin-left: 16;
`;

export const FlexView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavSafeAreaView = styled.SafeAreaView<{ backgroundColor: string }>`
  background-color: ${props => props.backgroundColor};
`;

export const NavBarView = styled.View<{
  height: number;
  marginTop: number;
  backgroundColor: string;
}>`
  height: ${props => props.height};
  margin-top: ${props => props.marginTop};
  background-color: ${props => props.backgroundColor};
`;
export const TitleView = styled(FlexView)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TitleText = styled.Text<{ color: string }>`
  position: relative;
  font-size: 18;
  color: ${props => props.color};
`;

export const HandleView = styled(FlexView)`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
