import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import style from './style.js';
import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';
export default function List({ data }) {

  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });

  const font = StyleSheet.create({
    itemText: {
      color: '#ffffff',
      fontSize: 15,
      fontFamily: 'NovaMono_400Regular',
  },
  });

  if (!fontsLoaded) {
    return <AppLoading />;

  } else {

  return (
   
    
      <View style={style.itemContainer}>
        <Text style={font.itemText}>Nome: {data.name}</Text>
        <Text style={font.itemText}>Classe de armadura: {data.armorclass}</Text>
        <Text style={font.itemText}>Tipo: {data.type}</Text>
        <Text style={font.itemText}>Preço: {data.price}</Text>
      </View>
    
  )}
}