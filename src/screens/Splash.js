import {StyleSheet, Image, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const assets = '../assets/';

const Splash = () => {
  return (
    <ImageBackground
      source={require(assets + 'background-image.png')}
      resizeMode="cover"
      style={styles.MainView}>
      <View></View>

      <View style={styles.bottomView}>
        <ImageBackground
          source={require(assets + 'vector1.png')}
          resizeMode="cover"
          style={{
            height: '100%',
            // backgroundColor: 100,
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              left: responsiveWidth(6),
              top: responsiveHeight(-5),
              backgroundColor: '#F8F8F8',
              width: responsiveWidth(38),

              height: responsiveHeight(18),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 86,
            }}>
            <Image
              style={{width: '70%', height: '70%'}}
              resizeMode="contain"
              source={require(assets + 'nautical-pay.png')}
            />
          </View>

          <View></View>
          <ImageBackground
            source={require(assets + 'vector2.png')}
            resizeMode="cover"
            style={{
              height: '100%',
              alignItems: 'center',

              // justifyContent: 'center',
              marginTop: '3%',
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontSize: 29,
                fontWeight: '700',
                marginTop: responsiveHeight(28),
                color: 'black',
                fontStyle: 'italic',
                fontFamily: 'Poppins',
                textAlign: 'center',
                paddingHorizontal: '10%',
                // backgroundColor: 100,
              }}>
              “Your World on Water Awaits”
            </Text>
          </ImageBackground>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bottomView: {
    height: '50%',
  },
});

export default Splash;
