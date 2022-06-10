import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const FormButton = ({
  TEXT,
  navigation,
  ToScreen,
  ButtonStyle,
  DISABLE,
  TextStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ToScreen)}
      // disabled={DISABLE}
      style={[
        {
          height: responsiveHeight(5.5),
          width: responsiveWidth(38),
          backgroundColor: DISABLE ? 'grey' : '#376FCC',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          marginVertical: responsiveHeight(2),
        },
        ButtonStyle,
      ]}>
      <Text
        style={[
          {fontSize: 16, color: '#FFFFFF', fontWeight: '700'},
          TextStyle,
        ]}>
        {TEXT}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;
