import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js";
import ListWeapons from './ListWeapons.js';
import style from './style.js';


export default function App() {

    const [weapons, setWeapons] = useState([]);


    useEffect(() => {
        async function dados() {
            await firebase.database().ref('item').child("WEAPONS").on('value', (snapshot) => {
                setWeapons([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        name: childItem.val().name,
                        damage: childItem.val().damage,
                        price: childItem.val().price,
                        properties: childItem.val().properties,
                    };
                    setWeapons(oldArray => [...oldArray, data]);
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
                data={weapons}
                renderItem={({ item }) => (<ListWeapons data={item} />)}
            />
        </LinearGradient>
    )
}