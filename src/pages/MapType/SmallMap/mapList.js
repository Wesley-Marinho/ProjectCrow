import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import style from "./style.js";
import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';
export default function mapList() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });

  const font = StyleSheet.create({
    tittle: {
      color: '#ffffff',
      fontSize: 23,
      textAlign: 'center',
      fontFamily: 'NovaMono_400Regular',
  },

  body: {
      color: '#ffffff',
      fontSize: 15,
      textAlign: "left",
      fontFamily: 'NovaMono_400Regular',
      paddingTop: '10%'
  },

  });

  if (!fontsLoaded) {
    return <AppLoading />;

  } else {

  return (
    <TouchableOpacity style={style.listContainer}
    onPress={() => navigation.navigate('CrowIsland')}>
      <View style={style.listItens}>

        <Image
          style={style.img}
          source={require('../../../img/CrowIsland.jpeg')}
        />
      </View>

      <View style={style.listItens}>
        <Text style={font.tittle}>Ilha do corvo</Text>
        <Text style={font.body}>Aventura medieval</Text>
      </View>
      
    </TouchableOpacity>
  )
}}