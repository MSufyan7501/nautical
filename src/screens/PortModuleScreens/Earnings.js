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
// import LineChart from 'react-native-line-chart';
// import {LineChart} from 'react-native-responsive-linechart';
// import LineChart from 'react-native-responsive-linechart';
import ContainerBooknEarn from '../../components/ContainerBooknEarn';

const Earnings = () => {
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
  const data = [-10, -15, 40, 19, 32, 15, 52, 55, 20, 60, 78, 42, 56];
  const config = {
    line: {
      strokeWidth: 1,
      strokeColor: '#216D99',
    },
    area: {
      gradientFrom: '#2e86de',
      gradientFromOpacity: 1,
      gradientTo: '#87D3FF',
      gradientToOpacity: 1,
    },
    yAxis: {
      labelColor: '#c8d6e5',
    },
    grid: {
      strokeColor: '#c8d6e5',
      stepSize: 30,
    },
    insetY: 10,
    insetX: 10,
    interpolation: 'spline',
    backgroundColor: '#fff',
  };
  return (
    <View style={styles.MainView}>
      <HeaderComp TEXT={'Booking Details'} />
      <View style={styles.containerFlatlist}>
        {/* <LineChart style={{flex: 1}} config={config} data={data} />; */}
        <View
          style={{
            flex: 1,
            // backgroundColor: 'pink',
            marginHorizontal: responsiveWidth(4),
          }}>
          <Text style={{color: '#5F5F5F', fontSize: 18, fontWeight: '700'}}>
            Bookings
          </Text>
          <FlatList
            data={DATA}
            renderItem={({item}) => {
              return (
                <ContainerBooknEarn
                  Username={item.username}
                  Portname={item.portname}
                  Img={item.icon}
                  bookingColor={item.bookColor}
                  DateFrom={item.start}
                  DateTo={item.end}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Earnings;

const styles = StyleSheet.create({
  MainView: {
    height: '100%',
    backgroundColor: '#376FCC',
    paddingTop: responsiveHeight(1.5),
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

  SingleEntryContainer: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#C4C4C4',
    height: responsiveHeight(5.5),
    marginTop: responsiveHeight(1.5),
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },

  containerFlatlist: {
    paddingVertical: responsiveHeight(1.5),
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingBottom: '10%',
    justifyContent: 'space-between',
  },
});
