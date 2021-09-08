import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js";
import List from './List';
import style from './style.js';

export default function App() {

    const [monsters, setMonsters] = useState([]);

    useEffect(() => {

        async function dados() {

            await firebase.database().ref('monsters').on('value', (snapshot) => {
                setMonsters([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        name: childItem.val().name,
                        armor: childItem.val().armor,
                        attacks: childItem.val().attacks,

                        car: childItem.val().attributes.car,
                        con: childItem.val().attributes.con,
                        des: childItem.val().attributes.des,
                        for: childItem.val().attributes.for,
                        int: childItem.val().attributes.int,
                        sab: childItem.val().attributes.sab,

                        challengeLevel: childItem.val().challengeLevel,
                        description: childItem.val().description,
                        displacement: childItem.val().displacement,
                        exp: childItem.val().exp,
                        healthPoints: childItem.val().healthPoints,
                    };
                    setMonsters(oldArray => [...oldArray, data]);
                })
            })

        }
        dados();
    }, []);

    return (
        <LinearGradient colors={['#ffffff', '#7A0400',]}
            style={global.LinearGradientList}>

            <View style={style.imgContainer}>
                <Image
                    style={style.logo}
                    source={require('../../img/icon.png')}
                />
            </View>

            <FlatList
                keyExtractor={item => item.key}
                data={monsters}
                renderItem={({ item }) => (<List data={item} />)}
            />

        </LinearGradient>
    )
}