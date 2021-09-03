import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import style from './style.js';
export default function index() {
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
            </View>
        </SafeAreaView>
    );
}
