import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {BirthDayInput, NameInput, OTPInput, PhoneNumberInput} from './Screens';
import NavigationBar from './components/NavigationBar';
import LottieView from 'lottie-react-native';

import {useDispatch, useSelector} from 'react-redux';

import {registerUser} from '../../store/Onboarding/actions';

const Onboarding = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.onboard.data);

  console.log('data ddd', data);
  const [step, setStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [code, setCode] = useState(null);

  const backAction = () => {
    if (step !== 0) {
      setStep(step - 1);
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [backAction]);

  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  const handleConfirm = () => {
    setIsCompleted(true);
  };
  const handleAnimationFinished = () => {
    dispatch(registerUser(data));
  };
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#1495ea'} />
      <SafeAreaView style={style.container}>
        {isCompleted ? (
          <View style={style.animationContainer}>
            <LottieView
              source={require('../../../assets/animations/transactionCompleted.json')}
              autoPlay
              loop={false}
              style={style.animation}
              onAnimationFinish={handleAnimationFinished}
            />
          </View>
        ) : (
          <View style={style.content}>
            {step === 0 && <NameInput />}
            {step === 1 && <BirthDayInput />}
            {step === 2 && <PhoneNumberInput />}
            {step === 3 && <OTPInput onChange={setCode} value={code} />}
          </View>
        )}

        {!isCompleted && (
          <NavigationBar
            iFirstStep={step === 0}
            isLastStep={step === 3}
            onNext={handleNext}
            onBack={handleBack}
            onConfirm={handleConfirm}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1495ea',
  },
  content: {
    flex: 1,
  },
  animationContainer: {
    flex: 1,
    alignItems: 'center',
  },
  animation: {
    width: '50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding;
