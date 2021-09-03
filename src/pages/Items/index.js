import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
import { Image, View } from 'react-native';
import global from "../../style/global.js";
import style from './style.js';
export default function App() {

    return (
        <LinearGradient colors={['#ffffff', '#3202D1',]}
            style={global.LinearGradient}>
            <View style={style.container}>
                <Image
                    style={global.img}
                    source={require('../../img/icon.png')}
                />
                <View style={style.container}>

                </View>
            </View>
        </LinearGradient>
    );
}