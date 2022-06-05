import {StyleSheet, TextInput, Image, Text, View} from 'react-native';
import React from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import FormButton from './FormButton';

const InputConponent = ({
  PLACEHOLDER,
  Unit,
  ContaierStyle,
  index,
  IconRight,
  IMG,
  MULTI,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          width: '90%',
          marginVertical: responsiveHeight(1),
          height: responsiveHeight(6),
          backgroundColor: 'white',
          justifyContent: 'space-around',
          paddingHorizontal: '2%',
          alignItems: 'center',
          borderRadius: 36,
        },
        ContaierStyle,
      ]}>
      {IMG ? (
        <Image
          style={{height: '35%', width: '8%'}}
          resizeMode="contain"
          source={IMG}
        />
      ) : null}
      <TextInput
        style={styles.InputContainerStyle}
        placeholder={PLACEHOLDER}
        placeholderTextColor={'grey'}
        autoCapitalize={'none'}
        autoCorrect={false}
        multiline={MULTI}
        //   maxLength={MAX}
        //   autoFocus={AUTOFOCUS}
      />
      {IMG ? (
        <Image
          style={{height: '35%', width: '8%'}}
          resizeMode="contain"
          source={IconRight}
        />
      ) : (
        <Text style={{color: 'grey'}}>{Unit}</Text>
      )}
      {/* forgot pass */}
    </View>
  );
};

const styles = StyleSheet.create({
  InputContainerStyle: {
    // borderRadius: 36,
    width: '90%',
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    paddingHorizontal: '6%',
    color: 'black',
  },
});

export default InputConponent;
