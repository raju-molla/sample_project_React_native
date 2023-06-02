/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
// import { Text } from 'react-native-paper';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 2000);

  // const handleScreen = () => {
  //   navigation.navigate('Login');
  // };
  return (
    <TouchableOpacity
      // onPress={handleScreen}
      style={{
        // marginTop:50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}>
      <Image
        style={{width: '100%'}}
        source={require('../../assets/img1.png')}
      />
    </TouchableOpacity>
  );
};

export default Splash;
