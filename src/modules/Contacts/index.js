import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ModalAlert from '../../components/ModalAlert';

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <View style={style.container}>
      <ModalAlert
        isOpen={isModalOpen}
        toggle={() => setIsModalOpen(false)}
        title={'WANT TO BE NOTIFIED \nGET ACCEPTED'}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1495ea',
    padding: 16,
  },
});
export default Contacts;
