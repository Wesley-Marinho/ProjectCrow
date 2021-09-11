import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Modal, SafeAreaView, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import List from './ModalList.js';
import style from './style.js';
export default function index() {
    const [monsters, setMonsters] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {

        async function monsterModal() {

            await firebase.database().ref('monsters').orderByChild('challengeLevel')
                .equalTo(2).on('value', (snapshot) => {
                    setMonstersM([]);
                    snapshot.forEach((childItem) => {
                        let data = {
                            key: childItem.key,
                            name: childItem.val().name,
                            armor: childItem.val().armor,
                            challengeLevel: childItem.val().challengeLevel,
                            description: childItem.val().description,
                            exp: childItem.val().exp,
                            healthPoints: childItem.val().healthPoints,
                        };
                        setMonsters(oldArray => [...oldArray, data]);
                    })
                })
        }
        monsterModal();
    }, []);


    const navigation = useNavigation();
    const images = [
        {
            url: '',
            props: {
                source: require('../../img/dungeon/F1.png')
            }
        },
        {
            url: '',
            props: {
                source: require('../../img/dungeon/F2.png')
            }
        },
    ];


    return (
        <SafeAreaView style={style.container}>
            <View style={style.container}>
                <ImageViewer imageUrls={images} renderIndicator={() => null} />

                <TouchableOpacity style={style.monsterButton}
                    onPress={() => navigation.navigate('Monster')}>
                    <Ionicons name='skull' size={30} color={"#ffffff"} />
                </TouchableOpacity>

                <TouchableOpacity style={style.infoButton}
                    onPress={() => {setModalVisible(true)}}>
                    <Ionicons name="information-circle" size={40} color={"#ffffff"} />
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
                            <FlatList
                                keyExtractor={item => item.key}
                                data={monsters}
                                renderItem={({ item }) => (<List data={item} />)}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
}
