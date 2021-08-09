import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/auth';

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
        <LinearGradient colors={['#373737', '#000',]}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <TouchableOpacity
                onPress={Alerta}>
                <Text>Deslogar</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}