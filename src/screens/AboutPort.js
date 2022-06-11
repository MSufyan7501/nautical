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
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FormButton from '../components/FormButton';

const AboutPort = ({navigation}) => {
  const DATA = [
    {Placeholder: 'Enter Port Name', icon: ''},
    {Placeholder: 'Enter Location', icon: ''},
    {Placeholder: 'Enter Coordinates', icon: ''},
    {Placeholder: 'Enter Rates Per Night', icon: ''},
  ];
  const FACILITIES = [{text: 'Shower'}, {text: 'Toilets'}];
  const PHOTOS = [
    {img: require('../assets/photo1.png'), addphoto: false},
    {img: require('../assets/photo2.png'), addphoto: false},
    // {img: require('../assets/photo2.png')},
    // {img: require('../assets/photo2.png')},
    {img: require('../assets/addPhoto.png'), addphoto: true},
  ];
  return (
    <View style={styles.MainView}>
      <Text style={{fontSize: 24, fontWeight: '700', color: '#376FCC'}}>
        Tell About Port
      </Text>
      {DATA.map(DATA => {
        return (
          <InputConponent
            ContaierStyle={styles.inputContainer}
            PLACEHOLDER={DATA.Placeholder}
            IconRight={DATA.icon}
          />
        );
      })}
      <View style={styles.inputContainer}>
        {FACILITIES.map(data => {
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
      <View
        style={{
          height: responsiveHeight(10),
          width: responsiveWidth(90),
          marginHorizontal: '5%',
          flexDirection: 'row',
          backgroundColor: 100,
        }}>
        <FlatList
          data={PHOTOS}
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

      {/* <View style={styles.ImgView}> */}
      {/* <ScrollView
          horizontal
          pagingEnabled
          contentContainerStyle={{
            height: '100%',
            backgroundColor: 'red',
            width: '100%',
            alignItems: 'center',
          }}>
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
        </ScrollView> */}
      {/* <ScrollView
          // horizontal
          contentContainerStyle={{
            height: '85%',
            width: '100%',
            backgroundColor: 100,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{height: '85%', flexDirection: 'row', width: '30%'}}>
            {PHOTOS.map((PHOTOS, index) => {
              return (
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 20,
                    marginRight: '4%',
                  }}
                  resizeMode="stretch"
                  source={PHOTOS.img}
                />
              );
            })}
          </View>
        </ScrollView> */}
      {/*  */}
      {/* </View> */}
      <FormButton
        navigation={navigation}
        ToScreen={'BottomStack'}
        TEXT={'Next'}
      />
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

// return item.addphoto ? (

// ) : (
//   // <ImageBackground
//   //   style={{
//   //     height: '100%',
//   //     width: '55%',
//   //     borderRadius: 20,
//   //     marginRight: '4%',
//   //   }}
//   //   resizeMode="stretch"
//   //   source={require('../assets/addPhoto.png')}>
//   //   <Text
//   //     style={{
//   //       fontSize: 54,
//   //       marginHorizontal: '19%',
//   //       marginVertical: '2.5%',
//   //       fontWeight: '300',
//   //       color: '#FFF',
//   //     }}>
//   //     +
//   //   </Text>
//   // </ImageBackground>
