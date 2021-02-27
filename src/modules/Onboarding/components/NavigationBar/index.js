import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';

const NavigationBar = ({
  iFirstStep,
  isLastStep,
  onNext = () => {},
  onBack = () => {},
  onConfirm = () => {},
  isLoading,
}) => {
  return (
    <View style={style.container}>
      <View>
        {!iFirstStep && (
          <TouchableOpacity
            style={[style.button, style.buttonBack]}
            onPress={onBack}
            disabled={isLoading}>
            <Icon name="arrow-round-back" color="#030d51" />
          </TouchableOpacity>
        )}
      </View>
      <View>
        {!isLastStep && (
          <TouchableOpacity
            style={[style.button, style.buttonNext]}
            onPress={onNext}
            disabled={isLoading}>
            <Icon name="arrow-round-forward" color="white" />
          </TouchableOpacity>
        )}
        {isLastStep && (
          <TouchableOpacity
            style={[style.button, style.buttonNext]}
            onPress={onConfirm}
            disabled={isLoading}>
            <Icon name="checkmark-circle-outline" color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 16,
    borderRadius: 20,
    elevation: 3,
  },
  buttonBack: {
    backgroundColor: '#3385b7e3',
  },
  buttonNext: {
    backgroundColor: '#d41ae2',
  },
});

export default NavigationBar;
