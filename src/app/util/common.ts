import i18n from './i18n';
import {Animated, Dimensions, Easing, Platform, StatusBar} from 'react-native';
import moment from 'moment';
import * as CONSTANT from '../constant';
import CryptoJS from 'react-native-crypto-js';
import SafariView from 'react-native-safari-view';
import {t} from 'i18next';

const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 428;

export const replaceString = (
  string: string,
  num: number,
  symbol = '###string###',
) => {
  const str = string.replace(new RegExp(symbol, 'g'), `${num}`);
  return str;
};

export const judgeLanguage = (data: any) => {
  if (i18n.language === 'en') {
    return data.en;
  } else {
    return data.zh;
  }
};

export const calculateFormHeight = (insets: any) => {
  const DEVICE_HEIGHT = Dimensions.get('window').height;
  const STATUSBAR_HEIGHT =
    Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight;
  return DEVICE_HEIGHT - CONSTANT.NAV_BAR_HEIGHT - STATUSBAR_HEIGHT;
};

export const getDateList = (month: string) => {
  const dateList = [];
  let count = 1;
  const daysInMonth = moment(`2020-${month || '01'}`, 'YYYY-MM').daysInMonth();
  while (count <= daysInMonth) {
    dateList.push({
      label: count,
      value: count,
    });
    count += 1;
  }
  return dateList;
};

export const formatDate = (date: string, rule: string) => {
  return moment(date).format(rule);
};

export const setLoadingAnimation = (duration = 1000) => {
  // Setup loading animation
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }),
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return spin;
};

export const generateOtp = () => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  return otp;
};

export const encryptedText = (message: string, timestamp = '') => {
  const ciphertext = CryptoJS.AES.encrypt(
    message,
    // `${CONSTANT.APP_ENCRYPTION_KEY.APP_SECRET_KEY}${timestamp}`,
    timestamp,
  ).toString();
  return ciphertext;
};

export const decryptedText = (message: string, timestamp = '') => {
  const bytes = CryptoJS.AES.decrypt(
    message,
    // `${CONSTANT.APP_ENCRYPTION_KEY.APP_SECRET_KEY}${timestamp}`,
    timestamp,
  );
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export const openNativeWebView = (targetUrl: string) => {
  if (Platform.OS === 'ios') {
    SafariView.isAvailable()
      .then(() =>
        SafariView.show({
          url: targetUrl,
        }),
      )
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
        console.log(error);
      });
  } else if (Platform.OS === 'android') {
  }
};

export const diffDay = () => {
  const curTime = moment().format('YYYY-MM-DD');
  let endTime;
  if (moment(curTime).weekday() === 0) {
    endTime = curTime;
  } else {
    endTime = moment().weekday(7).format('YYYY-MM-DD');
  }
  return moment(endTime).diff(moment(curTime), 'days') + 1;
};

export const isWithinPeriod = (start: string, end: string) => {
  const startTime = moment(start).format('YYYY-MM-DD HH:mm:ss');
  const endTime = moment(end).format('YYYY-MM-DD HH:mm:ss');
  const curTime = moment().format('YYYY-MM-DD HH:mm:ss');

  if (
    moment(startTime).diff(moment(curTime)) < 0 &&
    moment(endTime).diff(moment(curTime)) > 0
  ) {
    return true;
  }
  return false;
};

export const isWithinPeriodUsedDay = (start: string, end: string) => {
  const startTime = moment(start).format('YYYY-MM-DD');
  const endTime = moment(end).format('YYYY-MM-DD');
  const curTime = moment().format('YYYY-MM-DD');

  if (
    moment(startTime).diff(moment(curTime)) < 0 &&
    moment(endTime).diff(moment(curTime)) >= 0
  ) {
    return true;
  }
  return false;
};

export const isInMonth = (dataDate: string) => {
  const endTime = moment().subtract(1, 'months').format('YYYY-MM-DD HH:mm:ss');
  const curTime = moment(dataDate).format('YYYY-MM-DD HH:mm:ss');
  if (moment(curTime).diff(moment(endTime)) > 0) {
    return true;
  }
  return false;
};

export const isInWeek = (day: string) => {
  const curDay = moment().format('dddd').toLowerCase().slice(0, 3);
  if (day.indexOf(curDay) !== -1) {
    return true;
  }
  return false;
};

export const isInHours = (hours: string) => {
  const hoursList = hours.split(';');
  const curDay = moment().format('YYYY-MM-DD');
  const curTime = moment().format('YYYY-MM-DD HH:mm');
  let isInHour = false;
  hoursList.map((item: string) => {
    const date = curDay + ' ' + item;
    const diff = moment(curTime).diff(moment(date));
    if (diff > 0 && diff < 3600000) {
      isInHour = true;
    }
  });
  return isInHour;
};

export const closeNativeWebView = () => {
  if (Platform.OS === 'ios') {
    SafariView.isAvailable()
      .then(() => SafariView.dismiss())
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
        console.log(error);
      });
  } else if (Platform.OS === 'android') {
  }
};

export const pxTodp = (uiElePx: number) => {
  return (uiElePx * deviceWidthDp) / uiWidthPx;
};

export const thousandFormatter = (inputValue: number) => {
  const resultList: {value: number; unit: string} = {
    value: inputValue,
    unit: '',
  };

  if (inputValue % 1000 === 0 && inputValue > 0 && inputValue < 10000) {
    resultList.value = inputValue / 1000;
    resultList.unit = t('home_guest_redemption_hot_picks_thousand_exact_only');
  } else if (inputValue % 10000 === 0 && inputValue > 0) {
    if (i18n.language === 'en') {
      resultList.value = inputValue / 1000;
      resultList.unit = t(
        'home_guest_redemption_hot_picks_ten_thousand_exact_only',
      );
    } else {
      resultList.value = inputValue / 10000;
      resultList.unit = t(
        'home_guest_redemption_hot_picks_ten_thousand_exact_only',
      );
    }
  } else {
    if (i18n.language === 'en') {
      if (inputValue > 1000) {
        resultList.value = floorToOneDp(inputValue / 1000);
        resultList.unit = t('home_guest_redemption_hot_picks_thousand_only');
      }
    } else {
      if (inputValue > 1000 && inputValue < 10000) {
        resultList.value = floorToOneDp(inputValue / 1000);
        resultList.unit = t('home_guest_redemption_hot_picks_thousand_only');
      } else if (inputValue > 10000) {
        resultList.value = floorToOneDp(inputValue / 10000);
        resultList.unit = t(
          'home_guest_redemption_hot_picks_ten_thousand_only',
        );
      }
    }
  }

  return resultList;
};

export const floorToOneDp = (input: number) => {
  const result = input.toString().match(/^-?\d+(?:\.\d{0,1})?/)?.[0];
  return parseInt(result?.replace('.0', '') || '0', 10);
};
