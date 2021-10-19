import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js";

import ListArmor from './ListArmors.js';

import style from './style.js';


export default function App() {

    const [armor, setArmor] = useState([]);

    useEffect(() => {
        async function dados() {
            await firebase.database().ref('item').child("ARMORS").on('value', (snapshot) => {
                setArmor([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        name: childItem.val().name,
                        armorclass: childItem.val().armorclass,
                        price: childItem.val().price,
                        type: childItem.val().type,
                    };
                    setArmor(oldArray => [...oldArray, data]);
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
                data={armor}
                renderItem={({ item }) => (<ListArmor data={item} />)}
            />

        </LinearGradient>
    )
}