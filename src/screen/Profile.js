/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
// import {AntDesign} from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = ({navigation, route}) => {
  const handleBack = () => {
    navigation.navigate('ItemList');
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <AntDesign
          onPress={handleBack}
          name="arrowleft"
          size={24}
          style={{marginLeft: 20}}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../../assets/man.png')}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 600,
              marginTop: 5,
              textAlign: 'center',
            }}>
            {route.params.name}
          </Text>
          <Text
            style={{
              marginTop: 5,
              textAlign: 'center',
              // border: 1,
              fontSize: 12,
              padding: 5,
              backgroundColor: '#D3D3D3',
              borderRadius: 100,
            }}>
            user
          </Text>
        </View>

        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Text>48</Text>
            <Text style={styles.textStyle}>Followers</Text>
          </View>
          <View style={styles.detailItem}>
            <Text>345</Text>
            <Text style={styles.textStyle}>Following</Text>
          </View>
          <View style={styles.detailItem}>
            <Text>34</Text>
            <Text style={styles.textStyle}>save</Text>
          </View>
        </View>
        <View>
          <Text style={{color: 'gray', margin: 20, textAlign: 'center'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Platform.OS === 'ios' ? 50 : 10,
    flex: 1,
  },
  container: {
    flexDirection: 'column',

    alignItems: 'center',
  },
  imgContainer: {},
  img: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  details: {
    marginTop: 20,
    display: 'flex',
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#D3D3D3',
  },
  textStyle: {
    color: 'gray',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default Profile;
