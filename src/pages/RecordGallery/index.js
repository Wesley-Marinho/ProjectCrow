import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js"
import List from './List';
import style from "./style.js"
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [npc, setNPC] = useState([]);
  const { user: usuario } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    let uid = usuario.uid;
    async function dados() {
      await firebase.database().ref('record').child(uid).on('value', (snapshot) => {
        setNPC([]);
        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            npcF: chilItem.val().info,
          };
          setNPC(oldArray => [...oldArray, data].reverse());
        })

      })
    }
    dados();
  }, []);

  return (
    <LinearGradient colors={['#ffffff', '#363434',]}
      style={global.LinearGradientHome}>


      <View style={style.imgContainer}>
        <Image
          style={style.imgChat}
          source={require('../../img/icon.png')}
        />
      </View>

      <View style={style.buttonContainer}>

        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate('Record')}>
          <FontAwesome5 name='plus' size={25} color={"#000000"} />
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={item => item.key}
        data={npc}
        renderItem={({ item }) => (<List data={item} />)}
      />



    </LinearGradient>
  );
}