import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import style from './style.js';
export default function index() {

    return (
        <View >
            <Image
                style={style.img}
                source={require("../../../../img/CrowIsland.jpeg")} />

            <TouchableOpacity style={style.forestButton1}>
                <FontAwesome5 name='tree' size={30} color={"#ffffff"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.forestButton2}>
                <FontAwesome5 name='tree' size={30} color={"#ffffff"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.forestButton3}>
                <FontAwesome5 name='tree' size={30} color={"#ffffff"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.cityButton1}>
                <MaterialCommunityIcons name="home-group" size={30} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.cityButton2}>
                <MaterialCommunityIcons name="home-group" size={30} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.castleButton}>
                <FontAwesome5 name='fort-awesome' size={30} color={"#ffffff"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.dungeonButton}>
                <MaterialCommunityIcons name="sword-cross" size={30} color={"#ffffff"} />
            </TouchableOpacity>
        </View>
    )
}