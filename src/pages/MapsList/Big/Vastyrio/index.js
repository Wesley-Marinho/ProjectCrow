import { FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
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
                source={require("./img/Vastyrio.jpg")} />
            <TouchableOpacity style={style.monsterButton}
                onPress={() => navigation.navigate('MapsPart')}>
                <FontAwesome5 name='map-marker' size={30} color={"#ffffff"} />
            </TouchableOpacity>

        </View>
    )
}