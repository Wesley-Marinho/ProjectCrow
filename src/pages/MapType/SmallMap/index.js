import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
import { View } from 'react-native';
import global from "../../../style/global";
import MapList from "./mapList.js";
export default function App() {
    return (
        <LinearGradient colors={['#ffffff', '#3202D1',]}
            style={global.LinearGradientList}>
            <View >
                    <MapList></MapList>
            </View>
        </LinearGradient>
    );
}