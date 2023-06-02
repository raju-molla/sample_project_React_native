/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const List = () => {
  const scrollViewRef = useRef(null);
  const [add, setAdd] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState(Array);
  const [imgLink, setImgLink] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.log(error));
  }, []);
  // Alert.alert('hhhh');
  // if (item) {
  //   Alert.alert('hh');
  // }
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleChange = () => {
    setAdd(!add);
    setModalVisible(!isModalVisible);
  };
  const createItem = () => {
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: Math.random(),
        imageLink: imgLink,
        name: name,
        title: desc,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
        item.push(data);
        // Handle the response data
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle the error
      });
    Alert.alert('create succssfully');
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.text}>EXPLORE</Text>
          <AntDesign
            style={styles.Plasicon}
            name="plus"
            onPress={handleChange}
          />
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchItem}>
            <AntDesign style={styles.searchIcon} name="search1" />
            <TextInput style={styles.input} placeholder="Search here..." />
          </View>
        </View>
      </View>
      <Text
        style={{
          marginLeft: 30,
          marginTop: 20,
          marginBottom: 10,
          fontSize: 16,
          color: 'gray',
        }}>
        Top street Style bands
      </Text>
      <ScrollView ref={scrollViewRef}>
        <View
          style={{
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            // alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}>
          {item.map((ele, id) => (
            <View
              key={id}
              style={{
                display: 'flex',
                // flexWrap: 'wrap',
                // height: 300,
                width: '40%',
                // flexDirection: 'row',

                alignItems: 'center',
                justifyContent: 'center',
                border: 1,
                marginTop: 20,
                borderWidth: 1,
                padding: 20,
                backgroundColor: 'white',
                borderColor: 'white',
                // shadowColor: 'gray',
                borderRadius: 10,
              }}>
              {console.log(ele.imageLink)}
              <Image
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                  marginBottom: 10,
                  resizeMode: 'contain',
                }}
                source={{uri: ele.imageLink}}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  textAlign: 'center',
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                {ele.name}
              </Text>
              <Text
                style={{fontSize: 12, fontWeight: 400, textAlign: 'center'}}>
                {ele.title}
              </Text>
              <>
                {id % 2 === 0 ? (
                  <View style={styles.buttonCard}>
                    <Text style={styles.button}>Follower</Text>
                  </View>
                ) : (
                  <View style={styles.buttonCard}>
                    <Text style={styles.button}>Follower</Text>
                  </View>
                )}
              </>
            </View>
          ))}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <AntDesign
              style={{fontSize: 30}}
              onPress={toggleModal}
              name="arrowleft"
            />
            <Text style={styles.textModel}>Create New Collection</Text>
            <TextInput
              onChangeText={text => setImgLink(text)}
              style={styles.textInputModel}
              placeholder="Image Link"
            />
            <TextInput
              onChangeText={text => setName(text)}
              style={styles.textInputModel}
              placeholder="Collection Name"
            />
            <View style={styles.inputDes}>
              <TextInput
                onChangeText={text => setDesc(text)}
                placeholder="Description"
              />
            </View>
            <View style={styles.addButton}>
              <AntDesign
                onPress={createItem}
                style={styles.iconDesc}
                name="plus"
              />
              <Text onPress={createItem} style={styles.desText}>
                Create New
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    marginTop: Platform.OS === 'ios' ? 50 : 10,
    backgroundColor: 'lightGray',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleContainer: {
    height: 100,
    width: '95%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    // paddingBottom: 0,
  },
  text: {
    fontSize: 32,
    fontWeight: 800,
    fontFamily: 'Futura',
  },
  Plasicon: {
    fontSize: 30,
    textAlign: 'center',
  },
  searchContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },
  searchItem: {
    width: '90%',
    display: 'flex',
    backgroundColor: '#F2F3F3',
    flexDirection: 'row',
    alignItems: 'center',
    border: 1,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  ItemContainer: {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 96,
    height: 96,
    borderRadius: 100,
    // border: 1,
    borderWidth: 1,
    borderColor: '#F2F3F3',
    marginTop: 20,
  },
  band: {
    marginTop: 10,
    width: '90%',

    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'space-between',
  },
  Card: {
    border: 1,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'white',
    height: 242,
    width: '48%',
    borderRadius: 10,
    alignItems: 'center',
    // justifyContent
  },
  CardItem: {
    display: 'flex',
    alignItems: 'center',
  },
  Title: {
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  titletxt: {
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'center',
  },
  buttonCard: {
    // border: 0,
    backgroundColor: '#4997E9',
    height: 38,
    width: 131,
    // color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  button: {
    color: 'white',
  },
  AddContainer: {
    height: 300,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 1,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 20,
  },

  modalContainer: {
    // flex: 1,
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
    // eslint-disable-next-line no-dupe-keys
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop: '70%',
    width: '100%',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
  },
  textModel: {
    marginTop: 10,
    // textAlign: 'center',
    fontSize: 24,
    fontWeight: 600,
  },
  textInputModel: {
    padding: 10,
    // border: 1,
    borderWidth: 1,
    borderColor: '#F2F3F3',
    backgroundColor: '#F2F3F3',
    marginBottom: 10,
    borderRadius: 10,
    marginTop: 10,
    color: 'black',
  },
  inputDes: {
    padding: 10,
    // border: 1,
    borderWidth: 1,
    borderColor: '#F2F3F3',
    backgroundColor: '#F2F3F3',
    marginBottom: 10,
    borderRadius: 10,
    marginTop: 10,
    color: 'black',
    height: 100,
  },
  addButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    cursor: 'pointer',
  },
  iconDesc: {
    fontSize: 24,
    color: 'white',
    marginRight: 10,
  },
  desText: {
    color: 'white',
  },
});

export default List;
