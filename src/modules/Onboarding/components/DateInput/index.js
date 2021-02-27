import React, {useRef} from 'react';
import TextInputMask from 'react-native-text-input-mask';
import {StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const DateInput = ({onChange = () => {}}) => {
  const ref = useRef(null);
  return (
    <Animatable.View animation="bounceInRight" useNativeDriver>
      <TextInputMask
        refInput={ref}
        onChangeText={onChange}
        keyboardType="number-pad"
        autoFocus
        style={style.input}
        placeholder={'DD/MM/YYYY'}
        placeholderTextColor="#1344ca"
        mask={'[00]/[00]/[0000]'}
      />
    </Animatable.View>
  );
};
const style = StyleSheet.create({
  input: {
    fontSize: 36,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default DateInput;
