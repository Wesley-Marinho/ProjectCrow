import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Image, Modal, Text, TextInput, TouchableHighlight, TouchableOpacity, View, StyleSheet } from "react-native";
import { AuthContext } from '../../contexts/auth';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js";
import PostList from './postList.js';
import style from './style.js';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';

export default function App() {

  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });

  const font = StyleSheet.create({
    tittlePage: {
      fontFamily: 'NovaMono_400Regular',
      color: '#000000',
      fontSize: 20,
      textAlign: 'center',
    },
    textInput: {
      fontFamily: 'NovaMono_400Regular',
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 50,
      height: 45,
      width: "85%",
      fontSize: 17,
    },

    tittleModal: {
      color: '#000000',
      fontSize: 15,
      paddingBottom: "10%",
      textAlign: 'center',
      fontFamily: 'NovaMono_400Regular',
    }
  });

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

      <View style={style.tittleContainer}>
        <Text style={font.tittlePage}>Quadro de Aventuras</Text>
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

              <Text style = {font.tittleModal}>Compartilhe a sua aventura</Text>

              <TextInput
                style={font.textInput}
                placeholder={'Titulo da aventura'}
                placeholderTextColor={'#000000'}
                underlineColorAndroid="transparent"
                maxLength={50}
                onChangeText={(text) => setTittle(text)}
                value={tittle}
              />

              <TextInput
                style={font.textInput}
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
                style={font.textInput}
                placeholder={'Forma de contato'}
                placeholderTextColor={'#000000'}
                underlineColorAndroid="transparent"
                maxLength={50}
                onChangeText={(text) => setContact(text)}
                value={contact}
              />

              <TextInput
                style={font.textInput}
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
                <Text style={font.textBody}>Postar Aventura</Text>
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