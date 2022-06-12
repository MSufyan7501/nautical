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
import InputConponent from '../../components/InputConponent';
import FormButton from '../../components/FormButton';
// import {KeyboardAwareView} from 'react-native-keyboard-aware-view';

const ResetPassword = ({navigation}) => {
  const assets = '../../assets/';
  const DATA = [
    {img: require(assets + 'vector-password.png'), PLACEHOLDER: 'New Password'},
    {
      img: require(assets + 'vector-password.png'),
      PLACEHOLDER: 'Confirm Password',
    },
  ];
  return (
    // <KeyboardAvoidingView >
    <KeyboardAwareView>
      {/* <View style={{flex: 1}}> */}
      <ImageBackground
        source={require(assets + 'background-image.png')}
        blurRadius={8}
        style={styles.MainView}>
        {/* <ScrollView> */}
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
            Reset Password
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
            ToScreen={'Login'}
            TEXT={'Reset Password'}
          />
        </View>
        {/* </ScrollView> */}
      </ImageBackground>
      {/* </View> */}
    </KeyboardAwareView>
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

export default ResetPassword;
