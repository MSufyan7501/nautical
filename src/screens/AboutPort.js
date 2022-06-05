import {
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import InputConponent from '../components/InputConponent';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import FormButton from '../components/FormButton';

const AboutPort = () => {
  const DATA = [
    {Placeholder: 'Enter Port Name', icon: ''},
    {Placeholder: 'Enter Location', icon: ''},
    {Placeholder: 'Enter Coordinates', icon: ''},
    {Placeholder: 'Enter Rates Per Night', icon: ''},
  ];
  const FACILITIES = [{text: 'Shower'}, {text: 'Toilets'}];
  const PHOTOS = [
    {index: 0, img: require('../assets/photo1.png')},
    {index: 1, img: require('../assets/photo2.png')},
  ];
  return (
    <View style={styles.MainView}>
      <Text style={{fontSize: 24, fontWeight: '700', color: '#376FCC'}}>
        Tell About Port{' '}
      </Text>
      {DATA.map((DATA, index) => {
        return (
          <InputConponent
            ContaierStyle={styles.inputContainer}
            PLACEHOLDER={DATA.Placeholder}
            IconRight={DATA.icon}
          />
        );
      })}
      <View style={styles.inputContainer}>
        {FACILITIES.map((data, index) => {
          return (
            <View style={styles.TagsContainer}>
              <Text style={{fontSize: 14, fontWeight: '300', color: 'white'}}>
                {data.text}
              </Text>
            </View>
          );
        })}
      </View>

      <InputConponent
        PLACEHOLDER={'Description'}
        MULTI={true}
        ContaierStyle={{
          elevation: 9,
          height: responsiveHeight(16),
          justifyContent: null,
          alignItems: null,
          borderRadius: 14,
        }}
      />

      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: '#292929',
          width: '89%',
        }}>
        Photos
      </Text>
      <View style={styles.ImgView}>
        {PHOTOS.map((PHOTOS, index) => {
          return (
            <Image
              style={{
                height: '85%',
                width: '30%',
                borderRadius: 20,
                marginRight: '4%',
              }}
              resizeMode="stretch"
              source={PHOTOS.img}
            />
          );
        })}
        <ImageBackground
          style={{
            height: '92%',
            width: '55%',
            marginTop: '1.5%',

            borderRadius: 20,
            marginRight: '4%',
          }}
          resizeMode="stretch"
          source={require('../assets/addPhoto.png')}>
          <Text
            style={{
              fontSize: 54,
              marginHorizontal: '19%',
              marginVertical: '2.5%',
              fontWeight: '300',
              color: '#FFF',
            }}>
            +
          </Text>
        </ImageBackground>
      </View>

      <FormButton TEXT={'Next'} />
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    paddingVertical: responsiveHeight(3),
  },
  inputContainer: {
    elevation: 9,
    height: responsiveHeight(5.5),
    flexDirection: 'row',
    width: '90%',
    marginVertical: responsiveHeight(1),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: null,
    borderRadius: 36,
  },
  TagsContainer: {
    height: '55%',
    backgroundColor: '#376FCC',
    width: '20%',
    marginLeft: '5%',
    alignItems: 'center',
    borderRadius: 13,
    justifyContent: 'center',
  },
  ImgView: {
    flexDirection: 'row',
    width: '90%',
    height: responsiveHeight(13),
    alignItems: 'center',
    // backgroundColor: 100,
  },
});

export default AboutPort;

{
  /* <ScrollView
  horizontal
    pagingEnabled
  style={{height: '100%', backgroundColor: 'red', width: '100%'}}>
  {PHOTOS.map((PHOTOS, index) => {
    return (
        <Image
          style={{
            height: '63%',
            width: '26%',
            borderRadius: 20,
            marginRight: '4%',
          }}
          resizeMode="stretch"
          source={PHOTOS.img}
        />
      
    );
  })}
</ScrollView>; */
}

{
  /* <FlatList
  data={PHOTOS}
  keyExtractor={index => {
    return index.index;
  }}
  renderItem={({item}) => {
    return (
      //   <Image
      //     style={{
      //       height: '63%',
      //       width: '26%',
      //       borderRadius: 20,
      //       marginRight: '4%',
      //     }}
      //     resizeMode="stretch"
      //     source={require('../assets/nautical-pay.png')}
      //   />
      <Text>ddddd </Text>
    );
  }}
/>; */
}
