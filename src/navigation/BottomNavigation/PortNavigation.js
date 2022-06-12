import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Notification from '../../screens/CommonScreens/Notification';
import Profile from '../../screens/PortModuleScreens/Profile';
import Setting from '../../screens/CommonScreens/Setting';
import BookingofPort from '../../screens/PortModuleScreens/BookingofPort';
import PortHomeStack from '../Stacks/PortHomeStack';

const Tab = createBottomTabNavigator();

const PortNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image
                style={{...styles.icon1, tintColor: focused ? '#376FCC' : null}}
                resizeMode={'contain'}
                source={require('../../assets/home-active.png')}
              />
              {focused ? (
                <Text
                  style={{color: '#376FCC', fontWeight: '400', fontSize: 11}}>
                  Home
                </Text>
              ) : null}
            </View>
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
        name="Home"
        component={PortHomeStack}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image
                style={{...styles.icon2, tintColor: focused ? '#376FCC' : null}}
                resizeMode={'contain'}
                source={require('../../assets/notification-icon.png')}
              />
              {focused ? (
                <Text
                  style={{color: '#376FCC', fontWeight: '400', fontSize: 11}}>
                  Notifications
                </Text>
              ) : null}
            </View>
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
        name="Notification"
        component={Notification}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image
                style={{...styles.icon3, tintColor: focused ? '#376FCC' : null}}
                resizeMode={'contain'}
                source={require('../../assets/setting-icon.png')}
              />
              {focused ? (
                <Text
                  style={{color: '#376FCC', fontWeight: '400', fontSize: 11}}>
                  settings
                </Text>
              ) : null}
            </View>
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
        name="Setting"
        component={Setting}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image
                style={{...styles.icon4, tintColor: focused ? '#376FCC' : null}}
                resizeMode={'contain'}
                source={require('../../assets/profile-icon.png')}
              />
              {focused ? (
                <Text
                  style={{color: '#376FCC', fontWeight: '400', fontSize: 11}}>
                  profile
                </Text>
              ) : null}
            </View>
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default PortNavigation;

const styles = StyleSheet.create({
  icon1: {
    height: 15,
    width: 15,
    marginTop: '12%',
  },
  icon2: {
    height: 18,
    width: 19,
    marginTop: '12%',
  },
  icon3: {
    height: 18,
    width: 19,
    marginTop: '12%',
  },
  icon4: {
    height: 18,
    width: 19,
    marginTop: '12%',
  },
});
