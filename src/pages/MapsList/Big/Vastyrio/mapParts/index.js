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
                source: require('../img/1.png')
            }
        },
        {
            url: '',
            props: {
                source: require('../img/2.png')
            }
        },
        {
            url: '',
            props: {
                source: require('../img/3.png')
            }
        },
        {
            url: '',
            props: {
                source: require('../img/4.png')
            }
        },
    ];
    return (
        <SafeAreaView style={style.container}>
            <View style={style.container}>

                <ImageViewer imageUrls={images} renderIndicator={() => null} />
               
            </View>
        </SafeAreaView>
    );
}
