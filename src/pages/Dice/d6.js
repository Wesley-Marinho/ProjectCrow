import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style';
let resultado = 0
export default function App() {
    const [dado, rolar] = useState(0);
    const [qt, QT] = useState(1);

    function calc() {
        if (qt > 1) {
            for (let i = 0; i < qt; i++) {
                resultado += Math.floor(Math.random() * 6) + 1
            }
        } else {
            resultado = Math.floor(Math.random() * 6) + 1
        }
        rolar(resultado)
        resultado = 0
    }

    function ajust() {
        if (qt > 1) {
            QT((qt - 1))
        } else {
            QT((1))
        }
    }

    return (

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <TouchableOpacity
                onPress={() => QT((qt + 1))}
                style={style.buttonDiceQT}
            >

                <Text style={style.txtButton}>+</Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => ajust()}
                style={style.buttonDiceQT}
            >

                <Text style={style.txtButton}>-</Text>

            </TouchableOpacity>

            <Text style={style.txtNumber}>{qt}</Text>

            <TouchableOpacity
                onPress={() => calc()}
                style={style.buttonDice}
            >

                <Text style={style.txtButton}>D6</Text>

            </TouchableOpacity>

            <Text style={style.txtNumber}>{dado}</Text>
        </View>

    )
}

