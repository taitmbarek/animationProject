import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import LottieView from 'lottie-react-native';

const Home = () => {
  const navigation = useNavigation();
  const handleSignUpPress = () => {
    navigation.navigate('onBoarding');
  };
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#0c0885'} />
      <SafeAreaView style={style.container}>
        <View style={style.animationContainer}>
          <LottieView
            source={require('../../../../assets/animations/paymentComplete.json')}
            autoPlay
            loop
            style={style.animation}
          />
        </View>
        <TouchableOpacity style={style.button} onPress={handleSignUpPress}>
          <Text style={style.buttonText}>SIGN UP & ACCEPT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0c0885',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationContainer: {
    flex: 1,
  },
  animation: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    height: 50,
    padding: 20,
    backgroundColor: '#d41ae2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Home;
