import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    tittle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 4
    },

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

    text: {
        color: '#ffffff',
        fontSize: 20,
        paddingHorizontal: 4
    },

    textAttributes: {
        color: '#ffffff',
        fontSize: 20,
        paddingVertical: 2,
        paddingHorizontal: 4
    },

    monsterContainer: {
        backgroundColor: '#000000',
        opacity: 0.8,
        padding: 10,
        margin: 10,
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

    textInput: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 50,
        height: 45,
        width: "75%",
        fontSize: 17,
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