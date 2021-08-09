import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import global from "../../style/global.js";
import style from './style.js';
export default function app() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <LinearGradient colors={['#ffffff', '#3202D1',]}
      style={global.LinearGradient}>

      <View style={style.Container}>
        <Image
          style={global.img}
          source={require('../../img/icon.png')}
        />
        <TextInput
          style={style.textInput}
          placeholder={'Email'}
          placeholderTextColor={'#000000'}
          underlineColorAndroid="transparent"
          onChangeText={(texto) => setEmail(texto.trim())}
          value={email}
        />

        <TextInput
          style={style.textInput}
          placeholder={'Senha'}
          placeholderTextColor={'#000000'}
          underlineColorAndroid="transparent"
          onChangeText={(texto) => setPassword(texto.trim())}
          secureTextEntry={true}
          value={password}
        />
      </View>

      <View style={style.Container}>
        <TouchableOpacity style={style.button}
          onPress={handleLogin}>

          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <Text style={style.link}>Login</Text>
            )
          }
        </TouchableOpacity>
      </View>

      <View style={style.containerRow}>
        <Text style={style.logging}>Esqueceu a senha?   </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Password')}>
          <Text style={style.link}>Click aqui</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  )
}