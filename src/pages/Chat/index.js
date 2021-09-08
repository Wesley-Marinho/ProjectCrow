import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Modal, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js";
import PostList from './postList.js';
import style from './style.js';

export default function App() {
  const [message, setMessage] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    async function dados() {

      await firebase.database().ref('chat').on('value', (snapshot) => {
        setMessage([]);
        snapshot.forEach((childItem) => {
          let data = {
            key: childItem.key,
            tittle: childItem.val().tittle,
            contact: childItem.val().contact,
            vacancies: childItem.val().vacancies,
            summary: childItem.val().summary,

          };
          setMessage(oldArray => [...oldArray, data].reverse());
        })
      })

    }
    dados();
  }, []);

  return (
    <LinearGradient colors={['#ffffff', '#3202D1',]}
      style={global.LinearGradientList}>

      <View style={style.imgContainer}>
        <Image
          style={style.imgChat}
          source={require('../../img/icon.png')}
        />
      </View>

      <View style={style.buttonContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            setModalVisible(true);
          }}>
          <FontAwesome5 name='plus-square' size={50} color={"#ffffff"} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>

        <View style={style.centeredView}>
          <View style={style.modalView}>

            <View style={style.closeButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <FontAwesome name="close" size={24} color="#000000" />
              </TouchableOpacity>
            </View>

            <View style={style.modalItems}>

              <Text style={style.tittleModal}>Compartilhe a sua campanha</Text>

              <TextInput
                style={style.textInput}
                placeholder={'Titulo da aventura'}
                placeholderTextColor={'#000000'}
                underlineColorAndroid="transparent"
                maxLength={50}
              />

              <TextInput
                style={style.textInputSummary}
                placeholder={'Resumo'}
                placeholderTextColor={'#000000'}
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={10}
                maxLength={280}
              />

              <TextInput
                style={style.textInput}
                placeholder={'Numero de vagas'}
                placeholderTextColor={'#000000'}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                maxLength={5}
              />

              <TextInput
                style={style.textInput}
                placeholder={'Forma de contato'}
                placeholderTextColor={'#000000'}
                underlineColorAndroid="transparent"
                maxLength={50}
              />

              <TouchableHighlight
                style={style.openButton}>
                <Text style={style.textBody}>Postar Campanha</Text>
              </TouchableHighlight>
            </View>

          </View>
        </View>
      </Modal>

      <FlatList
        keyExtractor={item => item.key}
        data={message}
        renderItem={({ item }) => (<PostList data={item} />)}
      />

    </LinearGradient>
  );
}