import React from 'react';
import { Text, View } from 'react-native';
import style from './style.js';
export default function List({ data }) {
  return (
    <>
      <Text style={style.tittle}>Armas</Text>
      <View style={style.itemContainer}>
        <Text style={style.itemText}>Nome: {data.nome}</Text>
        <Text style={style.itemText}>Dano: {data.dano}</Text>
        <Text style={style.itemText}>Propriedades: {data.propriedades}</Text>
        <Text style={style.itemText}>Preço: {data.valor}</Text>
      </View>
    </>
  )
}