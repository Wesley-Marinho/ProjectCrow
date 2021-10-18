import { FontAwesome5 } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { Alert, Text, View, StyleSheet  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../contexts/auth';
import style from './style.js';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';
import AppLoading from 'expo-app-loading';

const font = StyleSheet.create({
  tittle: {
    fontFamily: 'NovaMono_400Regular',
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },

  textBody: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'NovaMono_400Regular',
  },
});


export default function List({ data }) {
  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });
  const { user: usuario } = useContext(AuthContext);
  const { handleDeleteF } = useContext(AuthContext);
  function Alerta() {
    Alert.alert(
      "Cuidado!",
      "Deseja mesmo apagar esse NPC?",
      [
        { text: "Sim", onPress:() => handleDeleteF(data.key, usuario.uid) },
        { text: "Não",}
      ],
      { cancelable: false }
    )
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style = {style.listContainer}>

      <Text style = {font.textBody}>{data.npcF}</Text>

      <TouchableOpacity
        style = {style.deleteContainer}
        onPress={Alerta}>
        <FontAwesome5 name='trash-alt' color='#fff' size={30} />
      </TouchableOpacity>

    </View>
  )}
}