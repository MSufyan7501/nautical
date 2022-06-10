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

const Setting = () => {
  const DATA = [
    {icon: require('../assets/profile-vector.png'), value: 'Profile Setting'},
    {icon: require('../assets/sail-vector.png'), value: 'Boat Setting'},
    {icon: require('../assets/help-vector.png'), value: 'Help & Support'},
    {icon: require('../assets/privacy-vector.png'), value: 'Privacy Policy'},
    {
      icon: require('../assets/setting-vector.png'),
      value: 'Application Setting',
    },
    {icon: require('../assets/logout-vector.png'), value: 'Logout'},
  ];
  return (
    <View style={styles.MainView}>
      <HeaderComp TEXT={'Setting'} />
      <View style={styles.containerFlatlist}>
        <View>
          {DATA.map(DATA => {
            return (
              <View style={styles.SingleEntryContainer}>
                <Image
                  style={{height: '90%', width: '6%'}}
                  resizeMode="contain"
                  source={DATA.icon}
                />
                <Text style={{color: 'black', fontSize: 14, width: '73%'}}>
                  {DATA.value}
                </Text>
              </View>
            );
          })}
        </View>
        <Text style={{fontSize: 14, color: '#000', alignSelf: 'center'}}>
          Nautical Pay V.1.0
        </Text>
      </View>
      <View style={{height: '3%'}} />
    </View>
  );
};

export default Setting;

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
