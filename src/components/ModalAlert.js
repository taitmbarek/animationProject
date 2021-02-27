import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

const {height} = Dimensions.get('window');

const ModalAlert = ({isOpen, toggle, title}) => {
  const alertTranslation = useRef(new Animated.Value(height)).current;
  useEffect(() => {
    Animated.timing(alertTranslation, {
      toValue: 200,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Modal
      useNativeDriver={true}
      animationInTiming={600}
      animationIn="slideInDown"
      isVisible={isOpen}
      onModalHide={toggle}>
      <View style={style.container}>
        <View style={[style.dialog]}>
          <Text style={style.title}>{title}</Text>
          <TouchableOpacity
            style={[style.button, style.accept]}
            onPress={toggle}>
            <Text style={style.acceptText}>TURN ON NOTIFICATIONS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.button, style.dismiss]}
            onPress={toggle}>
            <Text style={style.dismissText}>DISMISS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialog: {
    padding: 20,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 25,
  },
  title: {
    fontSize: 28,
    color: '#07154a',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    padding: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 20,
  },
  accept: {
    backgroundColor: '#b522a1',
  },
  dismiss: {
    backgroundColor: '#d4d1d3',
  },
  acceptText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  dismissText: {
    color: '#262425',
    fontWeight: 'bold',
  },
});

export default ModalAlert;
