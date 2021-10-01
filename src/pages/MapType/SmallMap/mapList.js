import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from "./style.js";
export default function mapList() {
  const navigation = useNavigation();
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
        <Text style={style.tittle}>Ilha do corvo</Text>
        <Text style={style.body}>Aventura medieval</Text>
      </View>
      
    </TouchableOpacity>
  )
}