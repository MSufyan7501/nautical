import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import BottomTabsNavigation from './src/navigation/BottomTabsNavigation';
import AuthNavigation from '../navigation/AuthNavigation';
import BottomTabsNavigation from './BottomTabsNavigation';
import AuthPortUser from './AuthNavigation/AuthPortUser';
import AuthBoatUser from './AuthNavigation/AuthBoatUser';
import PortNavigation from './BottomNavigation/PortNavigation';
import DrawerNavigation from './DrawerNavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      {/* module no 1 navigation */}
      {/* <AuthBoatUser /> */}

      {/* module no 2 navigation*/}
      {/* <AuthPortUser /> */}
      <DrawerNavigation />

      {/* <AuthNavigation /> */}
      {/* <BottomTabsNavigation /> */}
      {/* <PortNavigation /> */}
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
};

export default RootNavigation;
