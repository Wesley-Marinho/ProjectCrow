import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
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
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                backgroundColor: '#F5FCFF',
                flex: 1,
            }}>
                <ImageViewer imageUrls={images} renderIndicator={() => null} />
            </View>
        </SafeAreaView>
    );
}
