import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import global from "../../style/global.js";
import style from "./style.js";
export default function App() {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#ffffff', '#3202D1',]}
      style={global.LinearGradient}>
      <View style={style.container}>
        <Image
          style={global.img}
          source={require('../../img/icon.png')}
        />
        <Text style={style.tittle}>Onde será sua próxima aventura?</Text>
      </View>

      <View style={style.container}>
        <TouchableOpacity style={style.button}
        onPress={() => navigation.navigate('SmallMap')}>
          <Text style={style.link}>
            Reino
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.container}>
        <TouchableOpacity style={style.button}
         onPress={() => navigation.navigate('MediumMap')}>
          <Text style={style.link}>
            Continente
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.container}>
        <TouchableOpacity style={style.button}
         onPress={() => navigation.navigate('BigMap')}>
          <Text style={style.link}>
            Mundo
          </Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}