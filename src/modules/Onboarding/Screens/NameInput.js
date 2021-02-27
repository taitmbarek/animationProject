import React, {useEffect, useRef} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Animated,
  Easing,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {registerUserUpdate} from '../../../store/Onboarding/actions';

const NameInput = () => {
  const dispatch = useDispatch();
  const headingTranslation = useRef(new Animated.Value(100)).current;
  const inputTranslation = useRef(new Animated.Value(100)).current;
  const inputFading = useRef(new Animated.Value(0)).current;
  const handleChange = (name) => {
    dispatch(registerUserUpdate({name}));
  };
  useEffect(() => {
    Animated.sequence([
      Animated.timing(headingTranslation, {
        toValue: 0,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(inputTranslation, {
          toValue: 0,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
        Animated.timing(inputFading, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);
  return (
    <>
      <Animated.View style={{transform: [{translateX: headingTranslation}]}}>
        <Text style={style.title}>{"Hi \nWHAT'S YOUR NAME"}</Text>
      </Animated.View>
      <View style={style.container}>
        <Animated.View
          style={{
            transform: [{translateX: inputTranslation}],
            opacity: inputFading,
          }}>
          <TextInput
            placeholder="Name"
            autoFocus
            placeholderTextColor="#1344ca"
            style={style.input}
            onChangeText={handleChange}
          />
        </Animated.View>
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
  input: {
    fontSize: 36,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default NameInput;
