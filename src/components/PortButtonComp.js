import {View, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const PortButtonComp = ({ICON, VALUE, COLOR, TEXT}) => {
  return (
    <TouchableOpacity
      style={{
        width: responsiveWidth(43),
        height: responsiveHeight(10),
        backgroundColor: COLOR,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          height: '80%',
          position: 'absolute',
          width: '45%',
          top: responsiveHeight(-2),
          right: responsiveWidth(-5),
        }}
        resizeMode="contain"
        source={require('../assets/ring.png')}
      />
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          alignSelf: 'flex-start',
          justifyContent: 'space-evenly',
        }}>
        <Image
          style={{
            height: '80%',
            width: '15%',
            alignSelf: 'center',
          }}
          resizeMode="contain"
          source={ICON}
        />
        <Text
          style={{
            fontSize: 27,
            fontWeight: '700',
            color: '#fff',
          }}>
          {VALUE}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '400',
          color: '#fff',
        }}>
        {TEXT}
      </Text>
    </TouchableOpacity>
  );
};

export default PortButtonComp;
