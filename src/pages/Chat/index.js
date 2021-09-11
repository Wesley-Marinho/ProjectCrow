import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Image, Modal, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { AuthContext } from '../../contexts/auth';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js";
import PostList from './postList.js';
import style from './style.js';

export default function App() {

  const [message, setMessage] = useState([]);
  const { handleMessage } = useContext(AuthContext);
  const [tittle, setTittle] = useState('');
  const [contact, setContact] = useState('');
  const [vacancies, setVacancies] = useState();
  const [system, setSystem] = useState('')
  const [modalVisible, setModalVisible] = useState(false);

  function handleClear() {
    setTittle('');
    setContact('');
    setVacancies('');
    setSystem('');
  }

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
            system: childItem.val().system,
          };
          setMessage(oldArray => [...oldArray, data].reverse());
        })
        {
          modalVisible ? (
            setModalVisible(!modalVisible),
            handleClear()
          ) : (
            handleClear()
          )
        }


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
          <FontAwesome5 name='plus' size={25} color={"#000000"} />
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
                onChangeText={(text) => setTittle(text)}
                value={tittle}
              />

              <TextInput
                style={style.textInput}
                placeholder={'Sistema da Aventura'}
                placeholderTextColor={'#000000'}
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={50}
                maxLength={140}
                onChangeText={(text) => setSystem(text)}
                value={system}
              />

              <TextInput
                style={style.textInput}
                placeholder={'Forma de contato'}
                placeholderTextColor={'#000000'}
                underlineColorAndroid="transparent"
                maxLength={50}
                onChangeText={(text) => setContact(text)}
                value={contact}
              />

              <TextInput
                style={style.textInput}
                placeholder={'Numero de vagas'}
                placeholderTextColor={'#000000'}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                maxLength={5}
                onChangeText={(text) => setVacancies(text)}
                value={vacancies}
              />

              <TouchableHighlight
                style={style.openButton}
                onPress={
                  () => handleMessage(tittle, contact, vacancies, system)
                }>
                <Text style={style.textBody}>Postar Aventura</Text>
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