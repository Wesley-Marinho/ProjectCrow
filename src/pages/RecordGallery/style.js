import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    button: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 50,

    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '2%',  
    },

    listContainer: {
        backgroundColor: '#000000',
        opacity: 0.8,
        padding: '2%',
        margin: '2%',
        borderRadius: 10
    },

    imgContainer: {
        alignItems: 'center',
    },

    imgChat: {
        width: 290,
        height: 450,
        position: 'absolute',
        opacity: 0.75,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',

    },

    deleteContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: '5%' 
    },


})