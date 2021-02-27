import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import Header from '../components/Header';
import * as Animatable from 'react-native-animatable';
import {useDispatch, useSelector} from 'react-redux';
import {registerUserUpdate} from '../../../store/Onboarding/actions';

const PhoneNumberInput = () => {
  const ref = useRef(null);
  const data = useSelector((state) => state.onboard.data);
  const dispatch = useDispatch();
  const handleChange = (phoneNumber) => {
    dispatch(registerUserUpdate({phoneNumber}));
  };
  return (
    <>
      <Header title="I NEED YOUR PHONE TO IDENTIFY YOU" />
      <View style={style.container}>
        <Animatable.View animation="bounceInRight" useNativeDriver>
          <PhoneInput
            style={style.inputPhone}
            flagStyle={style.flag}
            textStyle={style.text}
            ref={ref}
            offset={10}
            initialCountry="us"
            textProps={{
              placeholder: 'Phone number',
              placeholderTextColor: '#1344ca',
              autoFocus: true,
            }}
            onChangePhoneNumber={handleChange}
            value={data?.phoneNumber}
          />
        </Animatable.View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputPhone: {
    height: 150,
    paddingLeft: 10,
    color: 'white',
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  flag: {
    width: 40,
    height: 30,
    borderTopLeftRadius: 4,
  },
  text: {
    height: 42,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10,
  },
});

export default PhoneNumberInput;
