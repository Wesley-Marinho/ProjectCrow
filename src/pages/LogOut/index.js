import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import global from "../../style/global.js";
import style from './style.js';
export default function App() {
    const { signOut } = useContext(AuthContext);
    function Alerta() {
        Alert.alert(
            "Cuidado!",
            "Deseja mesmo sair?",
            [
                {
                    text: "Sim", onPress: () => signOut(),
                },
                {
                    text: "Não",
                }
            ],
        )
    }
    return (
        <LinearGradient colors={['#ffffff', '#3202D1',]}
            style={global.LinearGradient}>
            <View style={style.container}>
                <Image
                    style={global.img}
                    source={require('../../img/icon.png')}
                />
                <View style={style.container}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={Alerta}>
                        <Text style={style.link}>Deslogar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}