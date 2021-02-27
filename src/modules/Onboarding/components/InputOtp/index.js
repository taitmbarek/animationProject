import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';

import TextInputMask from 'react-native-text-input-mask';
import * as Animatable from 'react-native-animatable';
const InputOTP = () => {
  const myCodeInput = useRef(null);

  return (
    <Animatable.View animation="bounceInRight" useNativeDriver>
      <TextInputMask
        refInput={myCodeInput}
        keyboardType="phone-pad"
        type="number"
        autoFocus
        style={style.input}
        placeholderTextColor="#1344ca"
        placeholder={'····'}
        mask={'[0000]'}
      />
    </Animatable.View>
  );
};

const style = StyleSheet.create({
  input: {
    fontSize: 50,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default InputOTP;
