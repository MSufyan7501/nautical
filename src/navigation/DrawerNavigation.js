// // import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import BottomTabsNavigation from './BottomTabsNavigation';
// import Home from '../screens/Home';
// // import AuthNavigation from './AuthNavigation';

// const Drawer = createDrawerNavigator();

// const DrawerNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContent={props => <Menu {...props} />}
//         screenOptions={{headerShown: false}}
//         initialRouteName="Home">
//         <Drawer.Screen
//           options={{
//             drawerLabel: 'Home',
//           }}
//           name="Home"
//           component={Home}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default DrawerNavigation;

// // const styles = StyleSheet.create({});
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/BoatModuleScreens/Home';
import Profile from '../screens/PortModuleScreens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
