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

const AboutYou = () => {
  const assets = '../assets/';
  const DATA = [
    {img: require(assets + 'user-vector.png'), PLACEHOLDER: 'Name'},
    {img: require(assets + 'phone-vector.png'), PLACEHOLDER: 'Phone Number'},
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
              backgroundColor: 'pink',
              //   opacity: 0.6,

              borderRadius: 26,
              paddingVertical: responsiveHeight(1.5),
              alignItems: 'center',
              marginTop: responsiveHeight(4),
            }}>
            <Text
              style={{
                fontSize: 24,
                paddingVertical: responsiveHeight(1),
                fontWeight: '700',
                color: '#376FCC',
              }}>
              About You
            </Text>
            <Image
              style={{
                width: '32%',
                height: responsiveHeight(14),
                marginVertical: responsiveHeight(0.5),
              }}
              resizeMode="contain"
              source={require(assets + 'about-you-ellipse.png')}
            />
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
              ButtonStyle={{
                marginTop: responsiveHeight(4),
              }}
              TEXT={'Next'}
            />
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

export default AboutYou;
