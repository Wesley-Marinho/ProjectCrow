import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import style from './style.js';
export default function index() {
    const navigation = useNavigation(); 
    const images = [
        {
            url: '',
            props: {
                source: require('../../img/city/Boldrin.png')
            }
        },
    ];
    return (
        <SafeAreaView style={style.container}>
            <View style={style.container}>

                <ImageViewer imageUrls={images} renderIndicator={() => null} />

                <TouchableOpacity style={style.shieldButton}
                    onPress={() => navigation.navigate('Items')}>
                    <FontAwesome5 name="shield-alt" size={30} color="#ffffff" />
                </TouchableOpacity>

                <TouchableOpacity style={style.npcButton}
                    onPress={() => navigation.navigate('Galeria_Fantasia')}>
                      <Ionicons name="ios-people" size={30} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
