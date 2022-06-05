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

const App = () => {
  return (
    <View style={styles.MainView}>
      {/* <Splash /> */}
      {/* <LogIn /> */}
      {/* <Register /> */}
      {/* <AboutYou /> */}
      {/* <AboutBoat /> */}
      {/* <ForgotPassword /> */}
      {/* <VerifyOTP /> */}
      {/* <ResetPassword /> */}
      <AboutPort />
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
});

export default App;
