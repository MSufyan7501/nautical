import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from './src/screens/Splash';
import LogIn from './src/screens/LogIn';
import Register from './src/screens/Register';
import AboutYou from './src/screens/AboutYou';
import AboutBoat from './src/screens/AboutBoat';
import ForgotPassword from './src/screens/ForgotPassword';
import VerifyOTP from './src/screens/VerifyOTP';
import ResetPassword from './src/screens/ResetPassword';
import AboutPort from './src/screens/AboutPort';
import UploadDocs from './src/screens/UploadDocs';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigation from './src/navigation/BottomTabsNavigation';
import BookingDetails from './src/screens/BookingDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="AboutYou" component={AboutYou} />
        <Stack.Screen name="AboutPort" component={AboutPort} />
        <Stack.Screen name="UploadDocs" component={UploadDocs} />
        <Stack.Screen name="AboutBoat" component={AboutBoat} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
        <Stack.Screen name="BottomStack" component={BottomTabsNavigation} />
      </Stack.Navigator>

      {/* <BottomTabsNavigation /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
});

export default App;
