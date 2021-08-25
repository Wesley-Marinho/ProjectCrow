import React from 'react';
import { Image, Text, View } from 'react-native';
import style from "./style.js";
export default function mapList() {

  return (
    <View style={style.listContainer}>
      <View style={style.listItens}>
        <Image
          style={style.img}
          source={require('../../../img/SmallMap.png')}
        />
      </View>

      <View style={style.listItens}>
        <Text style={style.tittle}>Titulo</Text>
      </View>
    </View>
  )
}