import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import InputOTP from '../components/InputOtp';

const OTPInput = () => {
  return (
    <>
      <Header title="Code sent to +1252345234" />
      <View style={style.container}>
        <InputOTP placeholder="····" />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OTPInput;
