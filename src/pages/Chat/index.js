import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import global from "../../style/global.js";
import PostList from './postList.js';
import style from './style.js';
class App extends Component {
  render() {
    return (
      <LinearGradient colors={['#ffffff', '#3202D1',]}
        style={global.LinearGradientList}>

        <View style={style.imgContainer}>
            <Image
              style={style.imgChat}
              source={require('../../img/icon.png')}
            />
        </View>

        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.button}>
            <FontAwesome5 name='plus-square' size={50} color={"#ffffff"} />
          </TouchableOpacity>
        </View>

        <PostList></PostList>


      </LinearGradient>
    );
  }
}

export default App;