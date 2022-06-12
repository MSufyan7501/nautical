import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePort from '../../screens/PortModuleScreens/HomePort';
import BookingofPort from '../../screens/PortModuleScreens/BookingofPort';
import Earnings from '../../screens/PortModuleScreens/Earnings';

const Stack = createNativeStackNavigator();

const PortHomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomePort} />
      <Stack.Screen name="Booking" component={BookingofPort} />
      <Stack.Screen name="Earning" component={Earnings} />
    </Stack.Navigator>
  );
};

export default PortHomeStack;
