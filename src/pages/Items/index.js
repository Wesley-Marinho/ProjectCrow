import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import global from "../../style/global.js";
import style from "./style.js";
import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';
export default function App() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });

  const font = StyleSheet.create({
    link: {
      color: '#ffffff',
      fontSize: 25,
      textAlign: 'center',
      fontFamily: 'NovaMono_400Regular',
    },
    tittle: {
      color: '#000000',
      fontSize: 25,
      textAlign: 'center',
      paddingBottom: 20,
      fontFamily: 'NovaMono_400Regular',
    }
  });

  if (!fontsLoaded) {
    return <AppLoading />;

  } else {


  return (
    <LinearGradient colors={['#ffffff', '#363434',]}
      style={global.LinearGradient}>
      <View style={style.container}>
        <Image
          style={global.img}
          source={require('../../img/icon.png')}
        />
       
      </View>

      <View style={style.container}>
        <TouchableOpacity style={style.button}
          onPress={() => navigation.navigate('Weapon')}>
          <Text style={font.link}>
            Armas
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.container}>
        <TouchableOpacity style={style.button}
          onPress={() => navigation.navigate('Armor')}>
          <Text style={font.link}>
            Armmduras
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.container}>
        <TouchableOpacity style={style.button}
          onPress={() => navigation.navigate('Equipment')}>
          <Text style={font.link}>
            Equipamentos
          </Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}}