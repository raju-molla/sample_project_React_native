import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';
import notifee, {EventType} from '@notifee/react-native';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notify, setNotify] = useState(false);

  const postNotification = name => {
    fetch('http://localhost:3000/Notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        // title: title,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const onDisplayNotification = async () => {
    handleLogin();
    postNotification(username);

    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: username,
      body: 'hey I am from sample app',
      ios: {
        channelId,
        smallIcon: 'name-of-a-small-icon',
        pressAction: {
          id: 'mark-as-read',
          launchActivity: 'MainActivity',
        },
      },
    });
  };

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Provide Email and Password');
    } else {
      let name = username.split('@')[0];
      navigation.navigate('Profile', {name: name});
    }

    // console.log('Username:', username);
    // console.log('Password:', password);
  };
  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          setNotify(false);
          break;
        case EventType.PRESS:
          navigation.navigate('Notification', {username: username});
          setNotify(true);
          break;
      }
    });
  }, [navigation, username]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/asaa.png')}
        resizeMode="contain"
      />
      <Text style={styles.text}>WELCOME BACK</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => onDisplayNotification()}>
        <Text style={{color: 'white', fontWeight: 600}}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 10,
    backgroundColor: 'white',
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#D3D3D3',
    // color: 'red',
    opacity: 0.8,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 8,
  },

  img: {
    height: 150,
    width: 150,
  },
  btn: {
    height: 54,
    width: '90%',
    gap: 8,
    borderWidth: 1,
    borderColor: '#4997E9',
    borderRadius: 14,
    backgroundColor: '#4997E9',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
});

export default Login;
