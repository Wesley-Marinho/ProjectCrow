import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js";
import ListWeapons from './ListWeapons.js';
import ListArmor from './ListArmors.js';
import ListEquipments from "./ListEquipments.js"
import style from './style.js';


export default function App() {

    const [weapons, setWeapons] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [armor, setArmor] = useState([]);

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


    useEffect(() => {
        async function dados() {
            await firebase.database().ref('item').child("EQUIPMENTS").on('value', (snapshot) => {
                setEquipment([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        name: childItem.val().name,
                        price: childItem.val().price,
                    };
                    setEquipment(oldArray => [...oldArray, data]);
                })
            })
        }
        dados();

    }, []);

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
                data={weapons}
                renderItem={({ item }) => (<ListWeapons data={item} />)}
            />

            <FlatList
                keyExtractor={item => item.key}
                data={armor}
                renderItem={({ item }) => (<ListArmor data={item} />)}
            />

            <FlatList
                keyExtractor={item => item.key}
                data={equipment}
                renderItem={({ item }) => (<ListEquipments data={item} />)}
            />

        </LinearGradient>
    )
}