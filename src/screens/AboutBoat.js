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

const AboutBoat = () => {
  const assets = '../assets/';
  const DATA = [
    {
      img: require(assets + 'sail-vector.png'),
      PLACEHOLDER: 'Sial-280',
      Unit: '',
    },
    {
      img: require(assets + 'license-vector.png'),
      PLACEHOLDER: '896-ASD-251',
      Unit: '',
    },
    {
      img: require(assets + 'sail-vector.png'),
      PLACEHOLDER: 'Sail Boat',
      Unit: '',
    },
    {
      img: require(assets + 'measurment-vector.png'),
      PLACEHOLDER: '100',
      Unit: 'ft',
    },
    {
      img: require(assets + 'beam-vector.png'),
      PLACEHOLDER: 'Beam',
      Unit: 'ft',
    },
    {
      img: require(assets + 'draft-vector.png'),
      PLACEHOLDER: 'Draft',
      Unit: 'ft',
    },
    {
      img: require(assets + 'weight-vector.png'),
      PLACEHOLDER: 'Weight',
      Unit: 'Kg',
    },
    {
      img: require(assets + 'call-vector.png'),
      PLACEHOLDER: 'VHF Call Sign',
      Unit: '',
    },
  ];
  return (
    <ImageBackground
      source={require(assets + 'background-image.png')}
      blurRadius={8}
      style={styles.MainView}>
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: responsiveWidth(90),
              backgroundColor: 'pink',
              //   opacity: 0.6,

              borderRadius: 26,
              paddingVertical: responsiveHeight(1.5),
              alignItems: 'center',
              marginVertical: responsiveHeight(9),
            }}>
            <Text
              style={{
                fontSize: 24,
                paddingVertical: responsiveHeight(1),
                fontWeight: '700',
                color: '#376FCC',
              }}>
              Tell About Your Boat
            </Text>
            {DATA.map((DATA, index) => {
              return (
                <InputConponent
                  index={index}
                  PLACEHOLDER={DATA.PLACEHOLDER}
                  IMG={DATA.img}
                  Unit={DATA.Unit}
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
    justifyContent: 'center',
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

export default AboutBoat;
