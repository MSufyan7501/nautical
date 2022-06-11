import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const CustomMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 38.829868,
          longitude: -75.215091,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          //   onPress={handleSheetChange}
          coordinate={{latitude: 38.8341869, longitude: -75.218091}}>
          <Image
            style={{
              height: 35,
              width: 35,
              borderRadius: 30,
              resizeMode: 'contain',
              aspectRatio: 1,
            }}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP5UA72mA1X4UbKoWdNy5crF2H2DV4h6YDA&usqp=CAU',
            }}
          />
        </Marker>

        <Marker coordinate={{latitude: 38.8319269, longitude: -75.215011}}>
          <Image
            style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              resizeMode: 'contain',
              aspectRatio: 1,
            }}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP5UA72mA1X4UbKoWdNy5crF2H2DV4h6YDA&usqp=CAU',
            }}
          />
        </Marker>

        <Marker coordinate={{latitude: 38.8288148, longitude: -75.212111}}>
          <Image
            style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              resizeMode: 'contain',
              aspectRatio: 1,
            }}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP5UA72mA1X4UbKoWdNy5crF2H2DV4h6YDA&usqp=CAU',
            }}
          />
        </Marker>

        <Marker coordinate={{latitude: 38.8266219, longitude: -75.210111}}>
          <Image
            style={{
              height: 30,
              width: 30,
              borderRadius: 30,
              resizeMode: 'contain',
              aspectRatio: 1,
            }}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLP5UA72mA1X4UbKoWdNy5crF2H2DV4h6YDA&usqp=CAU',
            }}
          />
        </Marker>
      </MapView>
    </View>
  );
};

export default CustomMap;
