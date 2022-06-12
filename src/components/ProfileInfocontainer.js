import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ProfileInfocontainer = ({ICON, PHOTO, ITEM, PLACHOLDER, FOOTER}) => {
  return (
    <View
      style={{
        height: PHOTO ? responsiveHeight(17) : responsiveHeight(8.5),
        width: responsiveWidth(90),
        alignSelf: 'center',
        marginVertical: responsiveHeight(1),
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          //   backgroundColor: 100,
          //   justifyContent: 'space-between',
          height: '45%',
        }}>
        <Image
          style={{height: '70%', width: '9%'}}
          resizeMode="contain"
          source={ICON}
        />
        <Text
          style={{
            opacity: 0.3,
            color: '#000',
            marginHorizontal: '5%',
            fontSize: 14,
          }}>
          {ITEM}
        </Text>
      </View>
      {PHOTO ? (
        <View
          style={{
            height: responsiveHeight(10),
            width: responsiveWidth(90),
            marginHorizontal: '5%',
            flexDirection: 'row',
            marginTop: responsiveHeight(-2),
          }}>
          <FlatList
            data={PHOTO}
            horizontal
            renderItem={({item}) => {
              return (
                <Image
                  style={{
                    height: responsiveHeight(10),
                    borderRadius: 15,
                    marginHorizontal: responsiveWidth(1),
                    width: responsiveWidth(28),
                  }}
                  resizeMode="stretch"
                  source={item.img}
                />
              );
            }}
          />
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            marginLeft: '10%',
          }}>
          <TextInput
            style={{width: '80%'}}
            placeholder={PLACHOLDER}
            placeholderTextColor={'#000'}
            editable={false}
            //   secureTextEntry={ITEM == 'Password' ? console.log('passowrd') : true}
            secureTextEntry={true}
            sec
          />
          <TouchableOpacity
            style={{height: '30%', alignSelf: 'center', width: '10%'}}>
            <Image
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
              source={require('../assets/editable-vector.png')}
            />
          </TouchableOpacity>
        </View>
      )}
      {FOOTER ? (
        <View
          style={{
            width: '98%',
            borderBottomWidth: 0.3,
            alignSelf: 'center',
            color: 'grey',
            opacity: 0.2,
          }}
        />
      ) : null}
    </View>
  );
};

export default ProfileInfocontainer;

const styles = StyleSheet.create({});
