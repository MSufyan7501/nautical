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
import ProfileInfocontainer from '../../components/ProfileInfocontainer';

const Profile = () => {
  const PersonalDATA = [
    {
      icon: require('../../assets/user-vector.png'),
      item: 'Name',
      placeholder: 'Suneel Manj',
      footer: true,
      photos: false,
    },
    {
      icon: require('../../assets/user-vector.png'),
      item: 'Email',
      placeholder: 'ABC@gmail.com',
      footer: true,
      photos: false,
    },
    {
      icon: require('../../assets/user-vector.png'),
      item: 'Phone Number',
      placeholder: '+1 676 054 2358',
      footer: true,
      photos: false,
    },
    {
      icon: require('../../assets/user-vector.png'),
      item: 'Password',
      placeholder: 'abcsdssd',
      footer: true,
      photos: false,
    },
  ];

  const PortDATA = [
    {
      icon: require('../../assets/port-vector.png'),
      item: 'Port Name',
      placeholder: 'XYZ Port',
      footer: true,
      photos: false,
    },
    {
      icon: require('../../assets/loc-vector.png'),
      item: 'Location',
      placeholder: 'xyz corner downtown dubai',
      footer: true,
      photos: false,
    },
    {
      icon: require('../../assets/coordinates-vector.png'),
      item: 'Coordinates',
      placeholder: '12” 1’ 46.6320” N',
      footer: true,
      photos: false,
    },
    {
      icon: require('../../assets/desc-vector.png'),
      item: 'Description',
      placeholder: '',
      footer: true,
      photos: false,
    },
    {
      icon: require('../../assets/photo-vector.png'),
      item: 'Photos',
      placeholder: 'ABC@gmail.com',
      footer: true,
      photos: [
        {img: require('../../assets/photo1.png')},
        {img: require('../../assets/photo2.png')},
      ],
    },
  ];
  const [ActivePersonal, setActivePersonal] = useState(true);
  return (
    <View style={styles.MainView}>
      <HeaderComp TEXT={'Profiless'} />
      <View style={styles.ImgView}>
        <Image
          style={{height: '108%', marginTop: '3%', width: '104%'}}
          resizeMode="contain"
          source={require('../../assets/about-you-ellipse.png')}
        />
      </View>

      <Image
        source={require('../../assets/Union.png')}
        style={{
          position: 'absolute',
          flex: 1,
          width: responsiveWidth(100),
          top: responsiveHeight(9.5),
          height: responsiveHeight(100),
          // backgroundColor: 100,
          // marginTop: responsiveHeight(-5),
        }}
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <Text style={{fontSize: 19, fontWeight: '700', color: '#376FCC'}}>
          Username
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: responsiveWidth(60),
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              height: responsiveHeight(3.5),
              width: responsiveWidth(26),
              backgroundColor: ActivePersonal == true ? '#376FCC' : 'grey',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              marginVertical: responsiveHeight(2),
            }}
            onPress={() => {
              setActivePersonal(true);
            }}>
            <Text style={{fontSize: 14, color: '#FFFFFF', fontWeight: '700'}}>
              Personal
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: responsiveHeight(3.5),
              width: responsiveWidth(26),
              backgroundColor: ActivePersonal == false ? '#376FCC' : 'grey',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              marginVertical: responsiveHeight(2),
            }}
            onPress={() => {
              setActivePersonal(false);
            }}>
            <Text style={{fontSize: 14, color: '#FFFFFF', fontWeight: '700'}}>
              Port
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ActivePersonal ? PersonalDATA : PortDATA}
          renderItem={({item}) => {
            return (
              <ProfileInfocontainer
                ICON={item.icon}
                FOOTER={item.footer}
                PLACHOLDER={item.placeholder}
                ITEM={item.item}
                PHOTO={item.photos}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
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
  contentContainer: {
    width: responsiveWidth(100),
    top: responsiveHeight(27),
    height: responsiveHeight(66),
    position: 'absolute',
    alignItems: 'center',
  },
});
