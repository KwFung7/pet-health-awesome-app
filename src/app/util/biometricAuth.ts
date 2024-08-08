import ReactNativeBiometrics, {
  TouchID,
  FaceID,
  Biometrics,
} from 'react-native-biometrics';
import i18n from './i18n';
import {BIOMETRIC_AUTH_STATUS} from '../constant';

const BiometricAuthUtil = () => ({
  supportMode: async (): Promise<string> => {
    try {
      const biometrics = new ReactNativeBiometrics();
      const {available, biometryType} = await biometrics.isSensorAvailable();

      if (available && biometryType === TouchID) {
        return BIOMETRIC_AUTH_STATUS.TOUCH_ID;
      } else if (available && biometryType === FaceID) {
        return BIOMETRIC_AUTH_STATUS.FACE_ID;
      } else if (available && biometryType === Biometrics) {
        return BIOMETRIC_AUTH_STATUS.FACE_ID;
      } else {
        return BIOMETRIC_AUTH_STATUS.DISABLED;
      }
    } catch (err) {
      console.log(err);
      return BIOMETRIC_AUTH_STATUS.DISABLED;
    }
  },
  authenicate: async (message: string): Promise<boolean> => {
    const biometrics = new ReactNativeBiometrics();
    const {success} = await biometrics.simplePrompt({
      promptMessage: message,
      cancelButtonText: i18n.t('action_cancel'), // Android only
    });
    if (success) {
      return true;
    }
    return false;
  },
});

export default BiometricAuthUtil;
