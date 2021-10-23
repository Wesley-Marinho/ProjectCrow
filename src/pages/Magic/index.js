import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, TextInput, View, StyleSheet } from 'react-native';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js";
import List from './List.js';
import style from './style.js';
import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';
export default function App() {

    const [monsters, setMonsters] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(monsters);
    const [view, setView] = useState(false);

    let [fontsLoaded] = useFonts({
        NovaMono_400Regular,
      });
    
      const font = StyleSheet.create({
        textInput: {
            marginBottom: 10,
            padding: 10,
            borderWidth: 1,
            borderColor: '#000000',
            borderRadius: 50,
            height: 45,
            width: "90%",
            fontSize: 17,
            fontFamily: 'NovaMono_400Regular',
        },
      });

    useEffect(() => {
        async function dados() {
            await firebase.database().ref('spells').on('value', (snapshot) => {
                setMonsters([]);
                snapshot.forEach((childItem) => {
                    let data = {
                        key: childItem.key,
                        name: childItem.val().name,
                        description: childItem.val().description,
                        level: childItem.val().level,
                        classes: childItem.val().classes,
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

    if (!fontsLoaded) {
        return <AppLoading />;
    
      } else {

    return (
        <LinearGradient colors={['#ffffff', '#8419E0',]}
            style={global.LinearGradientList}>

            <View style={style.imgContainer}>
                <Image
                    style={style.logo}
                    source={require('../../img/icon.png')}
                />
            </View>

            <View style={style.inputContainer}>
                <TextInput
                    style={font.textInput}
                    placeholder={'Procurar por uma magia...'}
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
}}