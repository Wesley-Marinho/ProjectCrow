import React from 'react';
import { Text, View } from 'react-native';
import style from './style.js';
export default function List({ data }) {
  return (


    <View style={style.itemContainer}>
      <Text style={style.tittle}>Nome: {data.name}</Text>

      <View style={style.container}>
        <Text style={style.itemText}>Descrição: {data.description}</Text>
      </View>

      <View style={style.container}>
        <Text style={style.tittle}>Atributos</Text>
        <Text style={style.itemText}>Carisma : {data.car}</Text>
        <Text style={style.itemText}>Constituição : {data.con}</Text>
        <Text style={style.itemText}>Destreza : {data.des}</Text>
        <Text style={style.itemText}>Força : {data.for}</Text>
        <Text style={style.itemText}>Inteligencia : {data.int}</Text>
        <Text style={style.itemText}>Sabedoria : {data.sab}</Text>
      </View>

      <Text style={style.itemText}>Pontos de vida: {data.healthPoints}</Text>
      <Text style={style.itemText}>Classe de armadura: {data.armor}</Text>
      <Text style={style.itemText}>Nivel de desafio: {data.challengeLevel}</Text>
      <Text style={style.itemText}>Experiencia apos a derrota: {data.exp}</Text>
      <Text style={style.itemText}>Deslocamento: {data.displacement}</Text>
      <View style={style.container}>
        <Text style={style.tittle}>Ataques</Text>
      </View>
      <Text style={style.itemText}>{data.attacks}</Text>
    </View>

  )
}