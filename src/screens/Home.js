import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import MapView, {enableLatestRenderer} from 'react-native-maps';

const Home = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* <MapView style={{flex: 1}} provider={PROVIDER_GOOGLE} /> */}
      {/* <MapView  /> */}
      {/* <Text>Home</Text> */}
      <Text>HOME</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
