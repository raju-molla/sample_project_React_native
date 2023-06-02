import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import List from './List';
import DeleteList from './DeleteList';
const Tab = createBottomTabNavigator();

const ItemList = () => {
  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen
        name="List"
        component={List}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Icons name="list" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Delete List"
        component={DeleteList}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <AntDesign name="delete" color={color} size={size} />
          ),
          // headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default ItemList;
