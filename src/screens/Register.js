import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import InputConponent from '../components/InputConponent';
import FormButton from '../components/FormButton';

const Register = ({navigation}) => {
  const assets = '../assets/';
  const DATA = [
    {img: require(assets + 'email-vector.png'), PLACEHOLDER: 'Email'},
    {img: require(assets + 'vector-password.png'), PLACEHOLDER: 'Password'},
    {
      img: require(assets + 'vector-password.png'),
      PLACEHOLDER: 'Confirm Password',
    },
  ];
  return (
    <ImageBackground
      source={require(assets + 'background-image.png')}
      blurRadius={8}
      style={styles.MainView}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#F8F8F8',

              width: responsiveWidth(28),
              height: responsiveHeight(13),
              marginTop: responsiveHeight(10),

              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 86,
              alignSelf: 'center',
            }}>
            <Image
              style={{width: '65%', height: '65%'}}
              resizeMode="contain"
              source={require(assets + 'nautical-pay.png')}
            />
          </View>
          <View
            style={{
              width: responsiveWidth(90),
              backgroundColor: 'rgba(255,255,255,0.8)',
              //   opacity: 0.6,

              borderRadius: 26,
              paddingVertical: responsiveHeight(1),
              alignItems: 'center',
              marginTop: responsiveHeight(9),
            }}>
            <Text
              style={{
                fontSize: 24,
                paddingVertical: responsiveHeight(1),
                fontWeight: '700',
                color: '#376FCC',
              }}>
              Register
            </Text>
            {DATA.map((DATA, index) => {
              return (
                <InputConponent
                  index={index}
                  PLACEHOLDER={DATA.PLACEHOLDER}
                  IMG={DATA.img}
                />
              );
            })}
            <FormButton
              navigation={navigation}
              ToScreen={'AboutYou'}
              TEXT={'Register'}
            />
            {/* <TouchableOpacity
              style={{
                height: responsiveHeight(5.5),
                width: responsiveWidth(38),
                backgroundColor: '#376FCC',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                marginVertical: responsiveHeight(2),
              }}>
              <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '700'}}>
                Register
              </Text>
            </TouchableOpacity> */}
          </View>

          <Text
            style={{
              marginVertical: responsiveHeight(2),
              alignSelf: 'center',
              fontWeight: '400',
              fontSize: 17,
              color: 'white',
            }}>
            OR
          </Text>

          <View
            style={{
              flexDirection: 'row',
              height: responsiveHeight(5),
              backgroundColor: 'white',
              width: responsiveWidth(45),
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <Image
              style={{height: '60%', width: '40%'}}
              resizeMode="contain"
              source={require(assets + 'fb-vector.png')}
            />
            <View
              style={{
                height: '60%',
                opacity: 0.1,
                borderWidth: 1,
                borderColor: 'black',
              }}
            />
            <Image
              style={{height: '60%', width: '40%'}}
              resizeMode="contain"
              source={require(assets + 'google-vector.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: responsiveHeight(4),
              alignSelf: 'center',
            }}>
            <Text style={{color: '#376FCC', fontWeight: '400', fontSize: 14}}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: '#ffff',
                  fontSize: 14,
                  alignSelf: 'flex-end',
                  fontWeight: '600',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  InputContainerStyle: {
    // borderRadius: 36,
    width: '90%',
    height: responsiveHeight(6),
    backgroundColor: 'transparent',
    paddingHorizontal: '6%',
    color: 'black',
  },
});

export default Register;
