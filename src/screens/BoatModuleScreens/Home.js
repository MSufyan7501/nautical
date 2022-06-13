import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';

import CustomMap from '../../components/CustomMap';
import HeaderComp from '../../components/HeaderComp';
import SlideUpSheet from '../../components/SlideUpSheet';

const Home = () => {
  const [visible, setVisible] = useState(0)


  const SheetVisible =()=> 
  console.log('ajshjd')
  //  setVisible(1)
  
  return (
    // <Text>HOME</Text>
    <View style={{flex: 1}}>
      <CustomMap onPress={SheetVisible} />
      <HeaderComp
        TEXT={'Geolocation Data'}
        ICON={require('../../assets/loc-icon.png')}
        Abs={true}
      />
      <SlideUpSheet visible={visible} />
    </View>
    // <SlideUpSheet />
  );
};

export default Home;

const styles = StyleSheet.create({});
