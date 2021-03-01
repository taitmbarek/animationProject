import React, {useRef} from 'react';
import {Text, StyleSheet, Animated, Easing, SafeAreaView} from 'react-native';
import {useEffect} from 'react';

const Header = ({title}) => {
  const translation = useRef(new Animated.Value(110)).current;
  useEffect(() => {
    Animated.timing(translation, {
      toValue: 0,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, [translation]);
  return (
    <SafeAreaView>
      <Animated.View style={{transform: [{translateX: translation}]}}>
        <Text style={style.title}>{title}</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Header;
