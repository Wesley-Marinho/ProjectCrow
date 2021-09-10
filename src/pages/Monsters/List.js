import React from 'react';
import { Text, View } from 'react-native';
import style from './style.js';
export default function List({ data }) {
  return (


    <View style={style.monsterContainer}>

      <View style={style.container}>
        <Text style={style.tittle}>Nome: {data.name}</Text>
      </View>

      <View style={style.container}>
        <Text style={style.tittle}>Descrição</Text>
        <Text style={style.text}>{data.description}</Text>
      </View>

      <View style={style.container}>
        <Text style={style.tittle}>Atributos</Text>
        <Text style={style.textAttributes}>Carisma: {data.car}</Text>
        <Text style={style.textAttributes}>Constituição: {data.con}</Text>
        <Text style={style.textAttributes}>Destreza: {data.des}</Text>
        <Text style={style.textAttributes}>Força: {data.for}</Text>
        <Text style={style.textAttributes}>Inteligencia: {data.int}</Text>
        <Text style={style.textAttributes}>Sabedoria: {data.sab}</Text>
        <View style={style.otherAttributes}>
          <Text style={style.text}>Pontos de vida: {data.healthPoints}</Text>
          <Text style={style.text}>Classe de armadura: {data.armor}</Text>
          <Text style={style.text}>Nivel de desafio: {data.challengeLevel}</Text>
          <Text style={style.text}>Experiencia apos a derrota: {data.exp}</Text>
          <Text style={style.text}>Deslocamento: {data.displacement}</Text>
        </View>
      </View>

      <View style={style.container}>
        <Text style={style.tittle}>Ataques</Text>
        <Text style={style.text}>{data.attacks}</Text>
      </View>
    </View>

  )
}