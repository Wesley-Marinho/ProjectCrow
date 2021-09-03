import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import style from './style.js';
export default function index() {
    const navigation = useNavigation();
    return (
        <View >
            <Image
                style={style.img}
                source={require("../../../../img/CrowIsland.jpeg")} />

            <TouchableOpacity style={style.forestButton1}
                onPress={() => navigation.navigate('Haum')}>
                <FontAwesome5 name='tree' size={25} color={"#ffffff"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.forestButton2}
              onPress={() => navigation.navigate('Noir')}>
                <FontAwesome5 name='tree' size={25} color={"#ffffff"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.forestButton3}
              onPress={() => navigation.navigate('OfStone')}>
                <FontAwesome5 name='tree' size={25} color={"#ffffff"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.cityButton1}
              onPress={() => navigation.navigate('Caruaru')}>
                <MaterialCommunityIcons name="home-group" size={25} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.cityButton2}
              onPress={() => navigation.navigate('Yamogum')}>
                <MaterialCommunityIcons name="home-group" size={25} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.castleButton}
              onPress={() => navigation.navigate('Doughnut')}>
                <FontAwesome5 name='fort-awesome' size={25} color={"#ffffff"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.dungeonButton}
              onPress={() => navigation.navigate('MageLabirinty')}>
                <MaterialCommunityIcons name="sword-cross" size={25} color={"#ffffff"} />
            </TouchableOpacity>
        </View>
    )
}