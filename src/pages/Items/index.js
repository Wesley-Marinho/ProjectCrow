import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js";
import List from './List';
import style from './style.js';

export default function App() {

    const [item, setItem] = useState([]);

    useEffect(() => {

        async function dados() {

            await firebase.database().ref('item').on('value', (snapshot) => {
                setItem([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        nome: childItem.val().nome,
                        dano: childItem.val().dano,
                        valor: childItem.val().valor,
                        propriedades: childItem.val().propriedades,
                    };
                    setItem(oldArray => [...oldArray, data]);
                })
            })

        }
        dados();
    }, []);

    return (
        <LinearGradient colors={['#ffffff', '#363434',]}
            style={global.LinearGradientList}>

            <View style={style.imgContainer}>
                <Image
                    style={style.logo}
                    source={require('../../img/icon.png')}
                />
            </View>
           
            <FlatList
                keyExtractor={item => item.key}
                data={item}
                renderItem={({ item }) => (<List data={item} />)}
            />

        </LinearGradient>
    )
}