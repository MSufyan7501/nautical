import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LogIn from '../../screens/CommonScreens/LogIn';
import Register from '../../screens/CommonScreens/Register';
import AboutYou from '../../screens/CommonScreens/AboutYou';
import ForgotPassword from '../../screens/CommonScreens/ForgotPassword';
import VerifyOTP from '../../screens/CommonScreens/VerifyOTP';
import ResetPassword from '../../screens/CommonScreens/ResetPassword';
import AboutPort from '../../screens/PortModuleScreens/AboutPort';
import BottomTabsNavigation from '../../navigation/BottomTabsNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PortNavigation from '../BottomNavigation/PortNavigation';

const Stack = createNativeStackNavigator();

const AuthPortUser = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="AboutYou" component={AboutYou} />
      <Stack.Screen name="AboutBoat" component={AboutPort} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="BottomStack" component={PortNavigation} />
    </Stack.Navigator>
  );
};

export default AuthPortUser;
