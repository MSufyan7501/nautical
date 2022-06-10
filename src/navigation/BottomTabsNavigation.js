import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import BookingofPort from '../screens/BookingofPort';
import BookingDetails from '../screens/BookingDetails';
import Earnings from '../screens/Earnings';

const Tab = createBottomTabNavigator();

console.log('sdsdsd');
const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Notification"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 16,
          backgroundColor: 'skyblue',
          borderTopRightRadius: 16,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          elevation: 190,
          elevation: 90,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Earnings}

        // options={{
        //   tabBarIcon: ({focused}) => {
        //     <View
        //       style={{
        //         height: 50,
        //         width: 50,
        //         alignItems: 'center',
        //         justifyContent: 'center',
        //         backgroundColor: 100,
        //       }}>
        //       <Image
        //         resizeMode="contain"
        //         style={{height: '50%', width: '50%'}}
        //         source={require('../assets/email-vector.png')}
        //       />
        //     </View>;
        //   },
        // }}
      />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Settings" component={Setting} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;
