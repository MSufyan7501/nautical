import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import PortButtonComp from '../../components/PortButtonComp';

const HomePort = ({navigation}) => {
  const DATA = [
    {
      icon: require('../../assets/dollar.png'),
      text: 'Earning',
      color: '#1AB1B0',
      amount: '$560',
      navigate: 'Earning',
    },
    {
      icon: require('../../assets/booking-icon.png'),
      text: 'Current Booking',
      color: '#FF7544',
      amount: '25',
      navigate: 'Booking',
    },
  ];
  const FACILITIES = [
    {text: 'Shower', icon: require('../../assets/shower-icon.png')},
    {text: 'Toilets', icon: require('../../assets/toilet-icon.png')},
    {text: 'Refueling', icon: require('../../assets/refueling-icon.png')},
  ];

  return (
    <View style={styles.MainView}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        {DATA.map(data => {
          return (
            <PortButtonComp
              OnPRESS={() => navigation.navigate(data.navigate)}
              ICON={data.icon}
              VALUE={data.amount}
              TEXT={data.text}
              COLOR={data.color}
            />
          );
        })}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '6%',
          marginVertical: responsiveWidth(1.5),
        }}>
        <Text
          style={{
            fontWeight: '700',
            width: '70%',
            fontSize: 24,
            alignSelf: 'center',
            textAlign: 'right',
            color: '#000',
          }}>
          Port Name
        </Text>
        <TouchableOpacity style={{alignSelf: 'center', padding: 2}}>
          <Text style={{fontWeight: '700', color: '#376FCC'}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: responsiveWidth(92),
          height: responsiveHeight(25),
          alignSelf: 'center',
          //   backgroundColor: 100,
          borderRadius: 16,
        }}>
        <Image
          style={{height: '100%', width: '100%'}}
          resizeMode="stretch"
          source={require('../../assets/port-image.png')}
        />
      </View>
      <View
        style={{
          marginHorizontal: '6%',
          height: responsiveHeight(16),

          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            alignSelf: 'flex-start',
            color: '#000',
          }}>
          Description
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            color: '#000',
          }}>
          Waterfront area with sandy beaches, family fun at Wild Wadi Waterpark
          & beach bars serving seafood.
        </Text>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 14,
            color: '#000',
          }}>
          Coordinates
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            color: '#000',
          }}>
          {'        '}
          12” 1’ 46.6320” N<Text>{'               '}12” 1’ 46.6320” E</Text>
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
          height: responsiveHeight(11),
          justifyContent: 'space-evenly',
          marginHorizontal: '6%',
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            alignSelf: 'flex-start',
            color: '#000',
          }}>
          Facilites
        </Text>
        <View style={{flexDirection: 'row'}}>
          {FACILITIES.map(data => {
            return (
              <View
                style={{
                  width: responsiveWidth(25),
                  marginHorizontal: '1%',
                  backgroundColor: '#376FCC',
                  borderRadius: 14.5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  height: responsiveHeight(3.25),
                }}>
                <Image
                  resizeMode="contain"
                  style={{width: '20%', height: '90%'}}
                  source={data.icon}
                />
                <Text style={{fontSize: 13, fontWeight: '300', color: '#fff'}}>
                  {data.text}
                </Text>
              </View>
            );
          })}
        </View>
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
          justifyContent: 'space-between',
          marginHorizontal: '6%',
          marginVertical: '3%',
        }}>
        <Text style={{fontWeight: '700', color: '#000'}}>Rates/Night</Text>
        <Text style={{color: '#376FCC', fontWeight: '700'}}>$250</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: responsiveHeight(2.5),
  },
  TagsContainer: {
    height: '55%',
    backgroundColor: '#376FCC',
    width: '20%',
    marginLeft: '5%',
    alignItems: 'center',
    borderRadius: 13,
    justifyContent: 'center',
  },
});

export default HomePort;
