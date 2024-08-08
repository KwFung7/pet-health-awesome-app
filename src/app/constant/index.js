import normalize from '../util/normalize';

export const SYNC_PREFERENCE = {
  LANGUAGE: 'language',
};

export const BIOMETRIC_AUTH_STATUS = {
  DISABLED: 'Disabled',
  FACE_ID: 'FaceID',
  TOUCH_ID: 'TouchID',
};

export const NAV_BAR_HEIGHT_ANDROID = normalize(44);
export const NAV_BAR_HEIGHT_IOS = normalize(44);
export const NAV_BAR_HEIGHT = normalize(125);