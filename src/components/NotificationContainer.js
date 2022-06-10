import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const NotificationContainer = ({TEXT, ICON, DATE}) => {
  return (
    <View
      style={{
        marginTop: responsiveHeight(1),
        width: responsiveWidth(100),
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: responsiveHeight(1),
        }}>
        <View
          style={{
            height: responsiveHeight(7),
            borderRadius: 100,
            width: '15%',
          }}>
          <Image
            resizeMode="contain"
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 100,
            }}
            source={ICON}
          />
        </View>

        <View style={{width: '61%'}}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              color: '#000',
              textAlign: 'auto',
            }}>
            {TEXT}
          </Text>
        </View>
        <Text
          style={{
            fontWeight: '400',
            width: '12%',
            fontSize: 10,

            color: '#C4C4C4',
          }}>
          {DATE}
        </Text>
      </View>
      <View
        style={{
          width: '93%',
          borderBottomWidth: 0.3,
          alignSelf: 'center',
          color: 'grey',
          opacity: 0.2,
        }}
      />
    </View>
  );
};

export default NotificationContainer;
