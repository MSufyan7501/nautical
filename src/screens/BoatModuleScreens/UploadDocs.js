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
import {useState} from 'react';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import InputConponent from '../../components/InputConponent';
import FormButton from '../../components/FormButton';
import FilePicker from 'react-native-document-picker';

const UploadDocs = ({navigation}) => {
  const [Filename1, setFilename1] = useState(['License']);
  const [Filename2, setFilename2] = useState(['Emirates ID']);
  const [Filename3, setFilename3] = useState(['Passport']);
  // const [Uploaded, setUploaded] = useState(false);/
  const HandlePick = async value => {
    try {
      if (Filename1[0] == 'License') {
        const response = await FilePicker.pick();
        setFilename1(response[0].name);
      } else {
        FilePicker.isCancel();
        setFilename1([value]);
      }
      //   if (Uploaded == false) {
      //     const response = await FilePicker.pick();
      //     setFilename1(response[0].name);
      //     // setUploaded(true);
      //   } else {
      //     setFilename1('Licence');
      //     // setUploaded(false);
      //   }
    } catch (error) {
      console.log(error);
    }
  };
  const assets = '../../assets/';
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
              width: responsiveWidth(90),
              height: responsiveHeight(45),
              backgroundColor: 'rgba(255,255,255,0.8)',
              //   opacity: 0.6,

              borderRadius: 26,
              paddingVertical: responsiveHeight(1.5),
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: responsiveHeight(28),
            }}>
            <Text
              style={{
                fontSize: 24,
                paddingVertical: responsiveHeight(1),
                fontWeight: '700',
                color: '#376FCC',
              }}>
              Upload Documents
            </Text>
            <View style={styles.InputContainerStyle}>
              <Text
                style={{
                  color: Filename1[0] != 'License' ? '#376FCC' : 'grey',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                {Filename1}
              </Text>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '5%',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  HandlePick(['License']);
                }}>
                {Filename1[0] != 'License' ? (
                  <Image
                    style={{height: '40%', width: '100%'}}
                    resizeMode="contain"
                    source={require('../../assets/delete-vector.png')}
                  />
                ) : (
                  <Image
                    style={{height: '40%', width: '100%'}}
                    resizeMode="contain"
                    source={require('../../assets/add-doc.png')}
                  />
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.InputContainerStyle}>
              <Text
                style={{
                  color: Filename2[0] != 'Emirates ID' ? '#376FCC' : 'grey',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                {Filename2}
              </Text>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '5%',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  HandlePick(['Emirates ID']);
                }}>
                {Filename2[0] != 'Emirates ID' ? (
                  <Image
                    style={{height: '40%', width: '100%'}}
                    resizeMode="contain"
                    source={require('../../assets/delete-vector.png')}
                  />
                ) : (
                  <Image
                    style={{height: '40%', width: '100%'}}
                    resizeMode="contain"
                    source={require('../../assets/add-doc.png')}
                  />
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.InputContainerStyle}>
              <Text
                style={{
                  color: Filename3[0] != 'Passport' ? '#376FCC' : 'grey',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                {Filename3}
              </Text>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: '5%',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  HandlePick(['Passport']);
                }}>
                {Filename3[0] != 'Passport' ? (
                  <Image
                    style={{height: '40%', width: '100%'}}
                    resizeMode="contain"
                    source={require('../../assets/delete-vector.png')}
                  />
                ) : (
                  <Image
                    style={{height: '40%', width: '100%'}}
                    resizeMode="contain"
                    source={require('../../assets/add-doc.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
            {/* {DATA.map((DATA, index) => {
              return (
                <InputConponent
                  index={index}
                  PLACEHOLDER={DATA.PLACEHOLDER}
                  IMG={DATA.img}
                />
              );
            })} */}
            <FormButton
              navigation={navigation}
              ToScreen={'BottomStack'}
              ButtonStyle={{
                marginTop: responsiveHeight(4),
              }}
              TEXT={'Start'}
              DISABLE={
                Filename3[0] == 'Passport' &&
                Filename2[0] == 'Emirates ID' &&
                Filename1[0] == 'License'
              }
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

    alignItems: 'center',
  },
  InputContainerStyle: {
    // borderRadius: 36,
    flexDirection: 'row',
    width: '90%',
    // marginVertical: responsiveHeight(1),
    height: responsiveHeight(6),
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: '7%',

    alignItems: 'center',
    borderRadius: 36,
  },
});

export default UploadDocs;
