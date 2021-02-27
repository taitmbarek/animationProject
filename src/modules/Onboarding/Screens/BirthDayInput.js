import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import DateInput from '../components/DateInput';
import {useDispatch} from 'react-redux';
import {registerUserUpdate} from '../../../store/Onboarding/actions';

const BirthDayInput = () => {
  const dispatch = useDispatch();
  const handleDateChange = (birthDate) => {
    dispatch(registerUserUpdate({birthDate}));
  };
  return (
    <>
      <Header title={'HEY TARIK \nWHEN IS YOUR BIRTH DAY'} />
      <View style={style.container}>
        <DateInput onChange={handleDateChange} />
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
export default BirthDayInput;
