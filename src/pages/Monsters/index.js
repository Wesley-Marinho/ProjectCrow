import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, TextInput, View } from 'react-native';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js";
import List from './List.js';
import style from './style.js';
export default function App() {

    const [monsters, setMonsters] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(monsters);
    const [view, setView] = useState(false);


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

    useEffect(() => {
        function dados() {
            if (searchText === '') {
                setList(monsters);
            } else {
                setList(
                    monsters.filter(
                        (item) =>
                            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                    )
                );
                setView(true);
            }
        }
        dados()
    }, [searchText]);

    return (
        <LinearGradient colors={['#ffffff', '#7A0400',]}
            style={global.LinearGradientList}>

            <View style={style.imgContainer}>
                <Image
                    style={style.logo}
                    source={require('../../img/icon.png')}
                />
            </View>

            <View style={style.inputContainer}>
                <TextInput
                    style={style.textInput}
                    placeholder={'Procurar por monstro...'}
                    placeholderTextColor={'#000000'}
                    underlineColorAndroid="transparent"
                    value={searchText}
                    onChangeText={(t) => setSearchText(t)}
                    renderItem={({ item }) => <ListItem data={item} />}
                />
            </View>

            {view ? (
                <FlatList
                    data={list}
                    renderItem={({ item }) => <List data={item} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <FlatList
                    data={monsters}
                    renderItem={({ item }) => <List data={item} />}
                    keyExtractor={(item) => item.id}
                />
            )}

        </LinearGradient>
    )
}