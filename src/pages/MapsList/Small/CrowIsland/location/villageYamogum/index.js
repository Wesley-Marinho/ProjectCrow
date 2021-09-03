import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import style from './style.js';
export default function index() {
    const images = [
        {
            url: '',
            props: {
                source: require('../../img/city/02.png')
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
