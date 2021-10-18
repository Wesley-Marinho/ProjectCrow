import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import style from './style.js';

export default function index() {
    const navigation = useNavigation();
    const images = [
        {
            url: '',
            props: {
                source: require('../../img/castle/F1.png')
            }
        },
        {
            url: '',
            props: {
                source: require('../../img/castle/F2.png')
            }
        },
        {
            url: '',
            props: {
                source: require('../../img/castle/F3.png')
            }
        },
    ];

    return (
        <SafeAreaView style={style.container}>
            <View style={style.container}>
                <ImageViewer imageUrls={images} renderIndicator={() => null} />

                <TouchableOpacity style={style.npcButton}
                    onPress={() => navigation.navigate('Galeria_Fantasia')}>
                      <Ionicons name="ios-people" size={30} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
