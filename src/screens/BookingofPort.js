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
import BookingCard from '../components/BookingCard';

const BookingofPort = () => {
  const DATA = [
    {
      icon: require('../assets/user-image.png'),
      name: 'Username',
      from: 'July 18,2022',
      to: 'July 18,2022',
      amount: '3750',
    },
    {
      icon: require('../assets/user-image.png'),
      name: 'Username',
      from: 'July 18,2022',
      to: 'July 18,2022',
      amount: '3750',
    },
    {
      icon: require('../assets/user-image.png'),
      name: 'Username',
      from: 'July 18,2022',
      to: 'July 18,2022',
      amount: '3750',
    },
  ];
  return (
    <View style={styles.MainView}>
      <HeaderComp TEXT={'Booking of Ports'} />
      <View style={styles.containerFlatlist}>
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            return (
              <BookingCard
                IMG={item.icon}
                Username={item.name}
                DateFrom={item.from}
                DateTo={item.to}
                Amount={item.amount}
                Button={'Cancel'}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default BookingofPort;

const styles = StyleSheet.create({
  MainView: {
    height: '100%',
    backgroundColor: '#376FCC',
    paddingVertical: responsiveHeight(1.5),
  },

  containerFlatlist: {
    paddingVertical: responsiveHeight(1.5),
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingBottom: '10%',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
});
