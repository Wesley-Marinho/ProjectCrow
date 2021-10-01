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
                source: require('../../img/forest/02.png')
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
                 onPress={() => navigation.navigate('MonsterPick')}>
                    <FontAwesome5 name="info" size={25} color="#ffffff" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
