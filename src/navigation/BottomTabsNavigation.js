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
import HomePort from '../screens/HomePort';

const Tab = createBottomTabNavigator();

const BottomTabsNavigation = () => {
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
                source={require('../assets/home-active.png')}
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
        component={BookingofPort}
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
                source={require('../assets/notification-icon.png')}
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
                source={require('../assets/setting-icon.png')}
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
                source={require('../assets/profile-icon.png')}
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

export default BottomTabsNavigation;

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

//     <Tab.Navigator
//       initialRouteName="Notification"
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           borderTopLeftRadius: 16,
//           backgroundColor: 'skyblue',
//           borderTopRightRadius: 16,
//           shadowColor: 'black',
//           shadowOffset: {
//             width: 0,
//             height: 10,
//           },
//           elevation: 190,
//           elevation: 90,
//           position: 'absolute',
//         },
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={Earnings}

//         // options={{
//         //   tabBarIcon: ({focused}) => {
//         //     <View
//         //       style={{
//         //         height: 50,
//         //         width: 50,
//         //         alignItems: 'center',
//         //         justifyContent: 'center',
//         //         backgroundColor: 100,
//         //       }}>
//         //       <Image
//         //         resizeMode="contain"
//         //         style={{height: '50%', width: '50%'}}
//         //         source={require('../assets/email-vector.png')}
//         //       />
//         //     </View>;
//         //   },
//         // }}
//       />
//       <Tab.Screen name="Notification" component={Notification} />
//       <Tab.Screen name="Settings" component={Setting} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabsNavigation;
