import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Image, TextInput, View, StyleSheet } from 'react-native';
import React from "react";


import global from "../../style/global.js"
import style from "./style";

import D4 from "../Dice/d4";
import D6 from "../Dice/d6";
import D8 from "../Dice/d8";
import D10 from "../Dice/d10";
import D12 from "../Dice/d12";
import D20 from "../Dice/d20";
import D100 from "../Dice/d100";

export default function App() {

  return (
    <LinearGradient colors={['#ffffff', '#7A0400',]}
      style={global.LinearGradientHome}>

      <View style={style.imgContainer}>
        <Image
          style={style.logo}
          source={require('../../img/icon.png')}
        />
      </View>

      <D4 />
      <D6 />
      <D8 />
      <D10 />
      <D12 />
      <D20 />
      <D100 />

    </LinearGradient>
  );
}
