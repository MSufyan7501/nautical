import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HeaderComp = ({TEXT}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'tranarent',
        height: responsiveHeight(5),
        width: responsiveWidth(100),
      }}>
      <Image
        style={{
          height: '45%',
          alignSelf: 'center',
          width: '8%',
          marginLeft: '5%',
        }}
        resizeMode="contain"
        source={require('../assets/drawer-nev-vector.png')}
      />
      <Text
        style={{
          fontSize: 18,
          width: '75%',

          fontWeight: '700',
          color: '#fff',
          textAlign: 'center',
        }}>
        {TEXT}
      </Text>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({});
