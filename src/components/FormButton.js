import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const FormButton = ({TEXT, ButtonStyle, TextStyle}) => {
  return (
    <TouchableOpacity
      style={[
        {
          height: responsiveHeight(5.5),
          width: responsiveWidth(38),
          backgroundColor: '#376FCC',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          marginVertical: responsiveHeight(2),
        },
        ButtonStyle,
      ]}>
      <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: '700'}}>
        {TEXT}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({});
