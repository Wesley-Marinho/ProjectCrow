import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    imgContainer: {
        alignItems: 'center',
    },

    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 290,
        height: 450,
        position: 'absolute',
        top: 50,
        opacity: 0.75,
    },

    monsterContainer: {
        backgroundColor: '#000000',
        opacity: 0.8,
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },

    container: {
        paddingVertical: 5,
        borderColor: '#ffffff',
        borderWidth: 1,

    },

    otherAttributes: {
        paddingTop: 10,
    },

    button: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },

    inputContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: "space-around",
    },

    btnArea:{
        paddingBottom: "30%"
    }
})