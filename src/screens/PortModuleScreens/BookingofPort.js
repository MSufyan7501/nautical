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
import BookingCard from '../../components/BookingCard';

const BookingofPort = () => {
  const [Active, setActive] = useState('Current');
  const Current = [
    {
      icon: require('../../assets/user-image.png'),
      name: 'Username',
      from: 'July 18,2022',
      to: 'July 18,2022',
      amount: '3750',
    },
    {
      icon: require('../../assets/user-image.png'),
      name: 'Username',
      from: 'July 18,2022',
      to: 'July 18,2022',
      amount: '3750',
    },
    {
      icon: require('../../assets/user-image.png'),
      name: 'Username',
      from: 'July 18,2022',
      to: 'July 18,2022',
      amount: '3750',
    },
  ];
  const Past = [
    {
      icon: require('../../assets/user-image.png'),
      name: 'Username',
      from: 'July 18,2022',
      to: 'July 18,2022',
      amount: '3750',
    },
    {
      icon: require('../../assets/user-image.png'),
      name: 'Username',
      from: 'July 18,2022',
      to: 'July 18,2022',
      amount: '3750',
    },
  ];

  const BUTTON = [{text: 'Current'}, {text: 'Past'}];
  return (
    <View style={styles.MainView}>
      <HeaderComp TEXT={'Booking of Ports'} />
      <View style={styles.containerFlatlist}>
        <View
          style={{marginHorizontal: '6%', flexDirection: 'row', width: '90%'}}>
          {BUTTON.map(data => {
            return (
              <TouchableOpacity
                onPress={() => setActive(data.text)}
                style={{
                  borderBottomWidth: Active == data.text ? 2 : 0,
                  alignSelf: 'flex-start',
                  alignItems: 'center',
                  paddingVertical: '2%',
                  borderBottomColor:
                    Active == data.text ? '#376FCC' : '#C4C4C4',
                  width: '50%',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    color: Active == data.text ? '#376FCC' : '#C4C4C4',
                  }}>
                  {data.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <FlatList
          data={Active == 'Current' ? Current : Past}
          renderItem={({item}) => {
            return (
              <BookingCard
                Cancel={Active == 'Current' ? true : false}
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
    flex: 1,
    backgroundColor: '#376FCC',
    paddingTop: responsiveHeight(1.5),
  },

  containerFlatlist: {
    paddingTop: responsiveHeight(1),
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    // paddingBottom: '0%',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
});
