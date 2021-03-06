import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    tittle: {
        color: '#000000',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 20,
    },

    imgContainer: {
        alignItems: 'center',
    },

    logo: {
        width: 290,
        height: 450,
        position: 'absolute',
        top: 50,
        opacity: 0.75,
    },
    loadingContainer: {
        alignItems: 'center',
        paddingTop: '65%'
    },
    itemContainer: {
        backgroundColor: '#000000',
        opacity: 0.8,
        padding: 10,
        margin: 10,
        borderRadius: 10
    }
})