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

const VerifyOTP = ({navigation}) => {
  const assets = '../assets/';
  const DATA = [{value: ''}, {value: ''}, {value: ''}, {value: ''}];
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
              height: responsiveHeight(36),
              backgroundColor: 'rgba(255,255,255,0.8)',
              //   opacity: 0.6,

              borderRadius: 26,
              paddingVertical: responsiveHeight(1.5),
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: responsiveHeight(9),
            }}>
            <Text
              style={{
                fontSize: 24,
                paddingVertical: responsiveHeight(1),
                fontWeight: '700',
                color: '#376FCC',
              }}>
              Verify OTP
            </Text>
            <View
              style={{
                flexDirection: 'row',
                height: '21%',
                width: '70%',

                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              {DATA.map((DATA, index) => {
                return (
                  <View
                    style={{
                      height: '90%',
                      width: '20%',
                      backgroundColor: 'white',
                      borderRadius: 12,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: '600',
                        color: 'black',
                      }}></Text>
                  </View>
                );
              })}
            </View>
            <FormButton
              navigation={navigation}
              ToScreen={'ResetPassword'}
              TEXT={'Verify OTP'}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '800',
                color: '#376FCC',
                textAlign: 'center',
                paddingHorizontal: '10%',
                marginBottom: responsiveHeight(1.5),
                // backgroundColor: 100,
              }}>
              Note:
              <Text style={{fontWeight: '400'}}>
                {' '}
                Write Write OTP Sent to your Phone Number
              </Text>
            </Text>
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

export default VerifyOTP;
