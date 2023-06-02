/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {blue100} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

const Notification = ({navigation, route}) => {
  const [notify, setNotify] = useState(Array);
  //   useEffect(() => {
  //     fetch('http://localhost:3000/Notification')
  //       .then(response => response.json())
  //       .then(data => setNotify(data))
  //       .catch(error => console.log(error));
  //   }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          onPress={() => navigation.navigate('ItemList')}
          style={{fontSize: 30, marginLeft: 5}}
          name="arrowleft"
        />
        <Text style={{marginLeft: '30%', fontSize: 24, fontWeight: 400}}>
          Notification
        </Text>
      </View>
      <View style={styles.mainDev}>
        <Text style={styles.text}>{route.params.username}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    height: '10%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'center',
  },
  mainDev: {
    height: '40%',
    marginTop: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // textAlign: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Notification;
