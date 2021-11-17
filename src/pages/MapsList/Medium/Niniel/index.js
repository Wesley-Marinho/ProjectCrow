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
                source={require("./img/Niniel.png")} />

            <TouchableOpacity style={style.cityButton1}
                onPress={() => navigation.navigate('Boldrin')}>
                <MaterialCommunityIcons name="home-group" size={30} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.cityButton2}
                onPress={() => navigation.navigate('Lastam')}>
                <MaterialCommunityIcons name="home-group" size={30} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.cityButton3}
                onPress={() => navigation.navigate('Muraj')}>
                <MaterialCommunityIcons name="home-group" size={30} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.cityButton4}
                onPress={() => navigation.navigate('Zunfrid')}>
                <MaterialCommunityIcons name="home-group" size={30} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.cityButton5}
                onPress={() => navigation.navigate('Kritun')}>
                <MaterialCommunityIcons name="home-group" size={30} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.dungeonButton1}
              onPress={() => navigation.navigate('dungeonIce')}>
                <MaterialCommunityIcons name="sword-cross" size={30} color={"#ffffff"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.dungeonButton2}
              onPress={() => navigation.navigate('dungeonDark')}>
                <MaterialCommunityIcons name="sword-cross" size={30} color={"#ffffff"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.dungeonButton3}
              onPress={() => navigation.navigate('dungeonDesert')}>
                <MaterialCommunityIcons name="sword-cross" size={30} color={"#ffffff"} />
            </TouchableOpacity>

            <TouchableOpacity style={style.dungeonButton4}
              onPress={() => navigation.navigate('dungeonFire')}>
                <MaterialCommunityIcons name="sword-cross" size={30} color={"#ffffff"} />
            </TouchableOpacity>

        </View>
    )
}