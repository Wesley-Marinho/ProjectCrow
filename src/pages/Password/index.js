import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import global from '../../style/global.js';
import style from './style.js';
import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';

export default function App() {
  const [email, setEmail] = useState('');
  const { resetPassword, loadingAuth } = useContext(AuthContext);

  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });

  const font = StyleSheet.create({
    textInput: {
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 50,
      height: 45,
      width: "85%",
      fontSize: 17,
      fontFamily: 'NovaMono_400Regular',
    },

    link: {
      color: '#ffffff',
      fontSize: 15,
      textAlign: 'center',
      fontFamily: 'NovaMono_400Regular',
    },

  });
  function handlePasswordReset() {
    resetPassword(email);
  }

  if (!fontsLoaded) {
    return <AppLoading />;

  } else {

    return (
      <LinearGradient colors={['#ffffff', '#3202D1',]}
        style={global.LinearGradient}>
        <View style={style.Container}>
          <Image
            style={global.img}
            source={require('../../img/icon.png')}
          />
          <View style={style.Container}></View>
          <TextInput
            style={font.textInput}
            placeholder={'Email'}
            placeholderTextColor={'#000000'}
            underlineColorAndroid="transparent"
            onChangeText={(texto) => setEmail(texto.trim())}
            value={email}
          />
        </View >

        <View style={style.Container}>
          <TouchableOpacity
            style={style.button}
            onPress={handlePasswordReset}>
            {
              loadingAuth ? (
                <ActivityIndicator size={20} color="#FFF" />
              ) : (
                <Text style={font.link}>Recuperar</Text>
              )
            }
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}