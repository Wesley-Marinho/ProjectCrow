import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Listagem({ data }) {

  
  return (
    <View style={estilos.lista}>
      <Text style={estilos.txtC}>{data.npcF}</Text>
      <TouchableOpacity
        style={{
          alignItems:'flex-end',
        }}
        onPress={Alerta}>
        <FontAwesome5 name='trash-alt' color='#fff' size={30} />
      </TouchableOpacity>
    </View>
  )
}