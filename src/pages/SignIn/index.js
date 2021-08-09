import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import global from "../../style/global.js";
import style from './style.js';
export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, loadingAuth } = useContext(AuthContext);


  function handleSignUp() {
    signUp(email, password);
  }

  return (
    <LinearGradient
      colors={['#ffffff', '#3202D1',]}
      style={global.LinearGradient}
    >
      <SafeAreaView style={style.Container}>
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
      </SafeAreaView>
      
      <View style={style.ContainerButton}>
        <TouchableOpacity
          style={style.button}
          onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <Text style={style.link}>Cadastrar</Text>
            )
          }
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}