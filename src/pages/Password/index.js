import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import global from '../../style/global.js';
import style from './style.js';
export default function App() {
  const [email, setEmail] = useState('');
  const { resetPassword, loadingAuth } = useContext(AuthContext);

  function handlePasswordReset() {
    resetPassword(email);
  }

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
          style={style.textInput}
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
              <Text style={style.link}>Recuperar</Text>
            )
          }
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}