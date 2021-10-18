import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import style from './style.js';
import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';
export default function List({ data }) {
  
  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });

  const font = StyleSheet.create({
    tittle: {
      color: '#ffffff',
      fontSize: 20,
      fontFamily: 'NovaMono_400Regular',
      paddingHorizontal: 4
    }, text: {
      color: '#ffffff',
      fontSize: 20,
      paddingHorizontal: 4,
      fontFamily: 'NovaMono_400Regular',
    },

    textAttributes: {
      color: '#ffffff',
      fontSize: 20,
      paddingVertical: 2,
      paddingHorizontal: 4,
      fontFamily: 'NovaMono_400Regular',
  },
  });


  if (!fontsLoaded) {
    return <AppLoading />;

  } else {
  
  return (


    <View style={style.monsterContainer}>

      <View style={style.container}>
        <Text style={font.tittle}>Nome: {data.name}</Text>
      </View>

      <View style={style.container}>
        <Text style={font.tittle}>Descrição</Text>
        <Text style={font.text}>{data.description}</Text>
      </View>

      <View style={style.container}>
        <Text style={style.tittle}>Atributos</Text>
        <Text style={font.textAttributes}>Carisma: {data.car}</Text>
        <Text style={font.textAttributes}>Constituição: {data.con}</Text>
        <Text style={font.textAttributes}>Destreza: {data.des}</Text>
        <Text style={font.textAttributes}>Força: {data.for}</Text>
        <Text style={font.textAttributes}>Inteligencia: {data.int}</Text>
        <Text style={font.textAttributes}>Sabedoria: {data.sab}</Text>
        <View style={style.otherAttributes}>
          <Text style={font.text}>Pontos de vida: {data.healthPoints}</Text>
          <Text style={font.text}>Classe de armadura: {data.armor}</Text>
          <Text style={font.text}>Nivel de desafio: {data.challengeLevel}</Text>
          <Text style={font.text}>Experiencia apos a derrota: {data.exp}</Text>
          <Text style={font.text}>Deslocamento: {data.displacement}</Text>
        </View>
      </View>

      <View style={style.container}>
        <Text style={style.tittle}>Ataques</Text>
        <Text style={font.text}>{data.attacks}</Text>
      </View>
    </View>

  )
}}