import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import global from "../../style/global.js";
import style from "./style.js";
import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';
export default function App() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });

  const font = StyleSheet.create({
    link: {
      color: '#ffffff',
      fontSize: 25,
      textAlign: 'center',
      fontFamily: 'NovaMono_400Regular',
    },
    tittle: {
      color: '#000000',
      fontSize: 25,
      textAlign: 'center',
      paddingBottom: 10,
      fontFamily: 'NovaMono_400Regular',
    }
  });

  if (!fontsLoaded) {
    return <AppLoading />;

  } else {


    return (
      <LinearGradient colors={['#ffffff', '#3202D1',]}
        style={global.LinearGradient}>

        <View style={style.container}>
          <Image
            style={global.img}
            source={require('../../img/icon.png')}
          />
          <Text style={font.tittle}>Espaço do mestre</Text>
        </View>

        <View style={style.container}>
          <TouchableOpacity style={style.button}
            onPress={() => navigation.navigate('Maps')}>
            <Text style={font.link}>
              Mapas
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.container}>
          <TouchableOpacity style={style.button}
            onPress={() => navigation.navigate('Monster')}>
            <Text style={font.link}>
              Monstros
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.container}>
          <TouchableOpacity style={style.button}
            onPress={() => navigation.navigate('Galeria_Fantasia')}>
            <Text style={font.link}>
              NPC
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.container}>
          <TouchableOpacity style={style.button}
            onPress={() => navigation.navigate('Items')}>
            <Text style={font.link}>
              Itens
            </Text>
          </TouchableOpacity>
        </View>

        <View style={style.container}>
          <TouchableOpacity style={style.button}
            onPress={() => navigation.navigate('Dice')}>
            <Text style={font.link}>
              Dados
            </Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    );
  }
}