import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ContainerBooknEarn = ({
  Username,
  Portname,
  Img,
  bookingColor,
  DateFrom,
  DateTo,
}) => {
  return (
    <View
      style={{
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        marginVertical: responsiveHeight(1),
        borderRadius: 16,
        width: '100%',
        marginHorizontal: '0%',
        paddingVertical: responsiveHeight(1),
        paddingRight: '2%',
      }}>
      <Image
        style={{
          width: responsiveWidth(15),
          height: responsiveHeight(6),
        }}
        resizeMode="contain"
        source={Img}
      />
      <View style={{width: '50%', flexDirection: 'column'}}>
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: '700',
          }}>
          {Username}
        </Text>
        <Text
          style={{
            color: '#929292',
            fontSize: 12,
            fontWeight: '400',
          }}>
          {Portname}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: bookingColor,
          borderRadius: 8,
          paddingVertical: '1%',
          paddingHorizontal: '3%',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: '#5f5f5f',
            fontSize: 10,
            fontWeight: '700',
          }}>
          From:
          <Text
            style={{
              fontWeight: '400',
            }}>
            {'  '}
            {DateFrom}
          </Text>
        </Text>
        <Text
          style={{
            color: '#5f5f5f',
            fontSize: 10,

            fontWeight: '700',
          }}>
          To:
          <Text
            style={{
              fontWeight: '400',
            }}>
            {'       '}
            {DateTo}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default ContainerBooknEarn;
