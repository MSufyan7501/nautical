import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComp from '../../components/HeaderComp';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Calendar} from 'react-native-calendars';
import ContainerBooknEarn from '../../components/ContainerBooknEarn';

const BookingDetails = () => {
  const DATA = [
    {
      icon: require('../../assets/user1.png'),
      username: 'Username',
      portname: 'Portname',
      bookColor: '#FFD8AB',
      start: '06-July-2022',
      end: '10-July-2022',
    },
    {
      icon: require('../../assets/user1.png'),
      username: 'Username',
      portname: 'Portname',
      bookColor: '#AFC6EB',
      start: '06-July-2022',
      end: '10-July-2022',
    },
  ];
  return (
    <View style={styles.MainView}>
      <HeaderComp TEXT={'Booking Details'} />
      <View style={styles.containerFlatlist}>
        <Calendar
          markingType={'period'}
          markedDates={{
            '2022-06-07': {color: '#FFD8AB'},
            '2022-06-08': {color: '#FFD8AB'},
            '2022-06-09': {color: '#FFD8AB'},
            '2022-06-06': {
              startingDay: true ? (
                <View
                  style={{
                    height: 50,
                    width: 50,
                    position: 'absolute',
                    backgroundColor: 100,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{width: '100%', height: '100%'}}
                    source={require('../../assets/user-vector.png')}
                  />
                </View>
              ) : null,
              color: '#FFD8AB',
            },
            '2022-06-10': {
              selected: true,
              endingDay: true,
              color: '#FFD8AB',
              textColor: 'gray',
            },
            '2022-06-20': {color: '#afc5ea'},
            '2022-06-21': {color: '#afc5ea'},
            '2022-06-22': {color: '#afc5ea'},
            '2022-06-19': {
              startingDay: true,
              color: '#afc5ea',
            },
            '2022-06-23': {
              selected: true,
              endingDay: true,
              color: '#AFC6EB',
              textColor: 'gray',
            },
          }}
        />
        <View
          style={{
            flex: 1,
            // backgroundColor: 'pink',
          }}>
          <Text
            style={{
              color: '#5F5F5F',
              marginHorizontal: responsiveWidth(4),
              fontSize: 18,
              fontWeight: '700',
            }}>
            Bookings
          </Text>
          <FlatList
            data={DATA}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    width: responsiveWidth(90),
                    alignSelf: 'center',
                  }}>
                  <ContainerBooknEarn
                    Username={item.username}
                    Portname={item.portname}
                    Img={item.icon}
                    bookingColor={item.bookColor}
                    DateFrom={item.start}
                    DateTo={item.end}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  MainView: {
    height: '100%',
    backgroundColor: '#376FCC',
    paddingTop: responsiveHeight(1.5),
  },

  containerFlatlist: {
    paddingTop: responsiveHeight(1),
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});
