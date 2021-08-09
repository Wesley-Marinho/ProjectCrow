import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from 'react-native';
import global from "../../style/global.js";
import style from './style.js';


export default function app() {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#ffffff', '#3202D1',]}
            style={global.LinearGradientHome}>


            <View style={style.containerImg}>
                <Image
                    style={global.img}
                    source={require('../../img/icon.png')}
                />

                <Text style={style.tittle}>Tenha diversos mundos na palma da sua mão.</Text>
            </View>

            <View style={style.containerImg}>
            <TouchableOpacity style={style.buttonCriar}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={style.link}>Criar Conta</Text>
                </TouchableOpacity>
            </View>

            <View style={style.container}>
                <Text style={style.logging}>Já tem uma conta?   </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={style.link}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    );
}