import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComp from '../components/HeaderComp';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FormButton from '../components/FormButton';
import ProfileInfocontainer from '../components/ProfileInfocontainer';
import NotificationContainer from '../components/NotificationContainer';

const Notification = () => {
  const DATA = [
    {
      icon: require('../assets/notification-ellipse.png'),
      date: '7,Nov,22',
      text: 'Waterfront area with sandy beaches, family fun at Wild Wadi Waterpark & beach bars serving seafood.',
    },
    {
      icon: require('../assets/notification-ellipse.png'),
      date: '7,Nov,22',
      text: 'Notifications about the bookings,Payments, and reservations and updates.',
    },

    {
      icon: require('../assets/notification-ellipse.png'),
      date: '7,Nov,22',
      text: 'Notifications about the bookings,Payments, and reservations and updates.',
    },
  ];
  return (
    <View style={styles.MainView}>
      <HeaderComp TEXT={'Notifications'} />
      <View style={styles.containerFlatlist}>
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            return (
              <NotificationContainer
                TEXT={item.text}
                DATE={item.date}
                ICON={item.icon}
              />
            );
          }}
        />
        <View style={{height: '5%'}} />
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  MainView: {
    height: '100%',

    backgroundColor: '#376FCC',
    paddingVertical: responsiveHeight(1.5),
  },
  ImgView: {
    // position: 'absolute',
    top: responsiveHeight(8),
    elevation: 9,
    zIndex: 1,
    position: 'absolute',
    height: responsiveHeight(18),
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(39),
  },
  contentContainer: {
    width: responsiveWidth(100),
    top: responsiveHeight(27),
    height: responsiveHeight(66),
    position: 'absolute',
    alignItems: 'center',
  },
  containerFlatlist: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});
