import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import CustomMap from '../../components/CustomMap';
import HeaderComp from '../../components/HeaderComp';

const Home = () => {
  return (
    // <Text>HOME</Text>
    <View style={{flex: 1}}>
      <HeaderComp
        TEXT={'Geolocation Data'}
        ICON={require('../../assets/loc-icon.png')}
        Abs={true}
      />
      <CustomMap />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
