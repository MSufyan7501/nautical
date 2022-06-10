import {Image, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FormButton from './FormButton';

const BookingCard = ({Button, Username, IMG, DateFrom, DateTo, Amount}) => {
  return (
    <View
      style={{
        width: responsiveWidth(92),
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '98%',
          // shadowRadius: 100,
          paddingTop: responsiveHeight(1),
          paddingBottom: responsiveHeight(1.5),
          marginVertical: responsiveHeight(1),
          elevation: 5,
          backgroundColor: '#fff',
          borderRadius: 16,
        }}>
        {IMG ? (
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: responsiveHeight(5),
                width: '20%',
              }}
              resizeMode="contain"
              source={IMG}
            />
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                fontWeight: '700',
                alignSelf: 'center',
              }}>
              {Username}
            </Text>
          </View>
        ) : (
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                marginHorizontal: responsiveWidth(5),
                marginVertical: responsiveHeight(1),
                fontWeight: '700',
                alignSelf: 'center',
              }}>
              {Username}
            </Text>
          </View>
        )}

        <View
          style={{
            //   flexDirection:'row',
            width: '90%',
            alignSelf: 'center',
            borderWidth: 0.3,
            opacity: 0.3,
            borderColor: '#000',
          }}
        />
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: '700',
            marginHorizontal: responsiveWidth(5),
            marginVertical: responsiveHeight(0.5),
          }}>
          Duration
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginHorizontal: responsiveWidth(5),

            opacity: 0.3,
          }}>
          <Text style={{width: '48%', fontSize: 8, color: '#000'}}>From:</Text>
          <Text style={{width: '48%', fontSize: 8, color: '#000'}}>To:</Text>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginHorizontal: responsiveWidth(5),
            marginBottom: responsiveHeight(1.5),
          }}>
          <Text style={{width: '48%', fontSize: 14, color: '#000'}}>
            {DateFrom}
          </Text>
          <Text style={{width: '48%', fontSize: 14, color: '#000'}}>
            {DateTo}
          </Text>
        </View>
        <View
          style={{
            //   flexDirection:'row',
            width: '90%',
            alignSelf: 'center',
            borderWidth: 0.3,
            opacity: 0.3,
            borderColor: '#000',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: responsiveWidth(5),
            marginVertical: responsiveHeight(0.5),
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '700',
            }}>
            Total Amount
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
              fontWeight: '700',
            }}>
            ${Amount}
          </Text>
        </View>
        <FormButton
          TEXT={'Cancel'}
          ButtonStyle={{
            height: responsiveHeight(4),
            width: responsiveWidth(25),
            marginBottom: responsiveHeight(1),
            alignSelf: 'center',
          }}
        />
      </View>
    </View>
  );
};

export default BookingCard;
