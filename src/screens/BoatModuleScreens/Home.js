import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import CustomMap from '../../components/CustomMap';
import HeaderComp from '../../components/HeaderComp';
import SlideUpSheet from '../../components/SlideUpSheet';

const Home = () => {
  return (
    // <Text>HOME</Text>
    <View style={{flex: 1}}>
      <CustomMap />
      <HeaderComp
        TEXT={'Geolocation Data'}
        ICON={require('../../assets/loc-icon.png')}
        Abs={true}
      />
      <SlideUpSheet />
    </View>
    // <SlideUpSheet />
  );
};

export default Home;

const styles = StyleSheet.create({});
