import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js";
import List from './PickList.js';
import style from './style.js';
export default function App() {

    const [monsters, setMonsters] = useState([]);

    useEffect(() => {

        async function dados() {

            var ref = firebase.database().ref("monsters");
            ref.orderByChild("challengeLevel").equalTo(2).on("child_added", function (snapshot) {
               let data = {
                key: snapshot.child('key').val(),
                name: snapshot.child('name').val(),
                armor: snapshot.child('armor').val(),
                challengeLevel: snapshot.child('challengeLevel').val(),
                description: snapshot.child('description').val(),
                exp: snapshot.child('exp').val(),
                healthPoints: snapshot.child('healthPoints').val(),
            };
            setMonsters(oldArray => [...oldArray, data]);
            });
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