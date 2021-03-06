import {StyleSheet, Text, View, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import MapHeader from '../Components/Header/MapHeader';
import {Marker} from 'react-native-maps';
// import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, sheetRef,useState} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import CustomMap from './CustomMap';
//callbacks
const SlideUpSheet = ({visible}) => {

   

  const snapPoints = useMemo(() => [ '1%','61%', '100%'], []);
  const handleSheetChange = useCallback(index => {

    console.log('handleSheetChange', index);
  }, []);
  // const navigation = useNavigation();

  

  return (
    <View style={styles.container}>
      {/* <MapHeader onPress={() => navigation.openDrawer()} /> */}
      {/* <CustomMap /> */}
      <View style={styles.container}>
        <BottomSheet
          ref={sheetRef}
          index={visible}
          snapPoints={snapPoints}
          onChange={handleSheetChange}>
          <BottomSheetScrollView
            contentContainerStyle={styles.contentContainer}>
            {/* {data.map(renderItem)} */}
            <View style={{marginHorizontal: 17, height: 900}}>
              <View>
                <Text style={{color: 'black', fontWeight: '900', fontSize: 22}}>
                  Name Of The Selection Port
                </Text>
              </View>
              <View style={{marginTop: 13}}>
                <Text
                  style={{ color: 'black',fontWeight: '400',fontSize: 14.5,lineHeight: 21,
                  }}>
                  Waterfront area with sand beaches, family fun at Wildy Wadi
                  Waterpark & beach bars searving seafood.
                </Text>
              </View>
              <View style={styles.imgView}>
                <Image
                  style={styles.fimage1}
                  source={require('../assets/1.png')}
                />
                <Image
                  style={styles.fimage2}
                  source={require('../assets/2.png')}
                />
                <Image
                  style={styles.fimage3}
                  source={require('../assets/3.png')}
                />
                <Image
                  style={styles.fimage4}
                  source={require('../assets/4.png')}
                />
              </View>
              <View
                style={{
                  borderBottomColor: '#000000',
                  borderBottomWidth: 1,
                  opacity: 0.2,
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: '900',
                  fontSize: 22,
                  marginVertical: 10,
                }}>
                Facilities
              </Text>
              <View style={styles.borderView}>
                <View style={styles.showerview}>
                  <Image
                    style={{height: '40%', width: '20%'}}
                    source={require('../assets/shower.png')}
                  />
                  <Text
                    style={{color: '#fff',  marginHorizontal: 5}}>
                    Shower
                  </Text>
                </View>
                <View style={styles.showerview}>
                  <Image
                    style={{height: '40%', width: '20%'}}
                    source={require('../assets/toilet.png')}
                  />
                  <Text
                    style={{color: '#fff', marginHorizontal: 9}}>
                    Toilets
                  </Text>
                </View>
                <View style={styles.showerview}>
                  <Image
                    style={{height: '40%', width: '20%'}}
                    source={require('../assets/fuel.png')}
                  />
                  <Text
                    style={{color: '#fff', marginHorizontal: 5}}>
                    Refuleing
                  </Text>
                </View>
              </View>
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  //  style
  container: {
    flex: 1,
    paddingTop: 220,
  
  },
  contentContainer: {
    backgroundColor: 'transparent',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
  },
  fimage1: {
    height: 47,
    width: 47,
    marginVertical: 6,
  },
  fimage2: {
    height: 47,
    width: 47,
    marginVertical: 6,
    marginHorizontal: 14,
  },
  fimage3: {
    height: 47,
    width: 47,
    marginVertical: 6,
    marginHorizontal: 2,
  },
  fimage4: {
    height: 47,
    width: 47,
    marginVertical: 6,
    marginHorizontal: 12,
  },
  imgView: {
    marginVertical: 10,
    flexDirection: 'row',
    // justifyContent:'space-between',
  },
  borderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '4%',
    width: '12%',

  },
  showerview: {
    //  justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#376FCC',
    marginRight: 11,
    width: '205%',
    paddingLeft: 4,
    height:'90%'
    
  },
});
export default SlideUpSheet;
