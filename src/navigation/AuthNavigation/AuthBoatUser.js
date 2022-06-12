import React from 'react';
import LogIn from '../../screens/CommonScreens/LogIn';
import Register from '../../screens/CommonScreens/Register';
import AboutYou from '../../screens/CommonScreens/AboutYou';
import AboutBoat from '../../screens/BoatModuleScreens/AboutBoat';
import ForgotPassword from '../../screens/CommonScreens/ForgotPassword';
import VerifyOTP from '../../screens/CommonScreens/VerifyOTP';
import ResetPassword from '../../screens/CommonScreens/ResetPassword';
import UploadDocs from '../../screens/BoatModuleScreens/UploadDocs';
import BottomTabsNavigation from '../../navigation/BottomTabsNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthBoatUser = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="AboutYou" component={AboutYou} />
      <Stack.Screen name="UploadDocs" component={UploadDocs} />
      <Stack.Screen name="AboutBoat" component={AboutBoat} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="BottomStack" component={BottomTabsNavigation} />
    </Stack.Navigator>
  );
};

export default AuthBoatUser;
