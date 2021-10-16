import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    buttonSave: {
        textAlign: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderRadius: 100,
        backgroundColor: '#000000',
        width: 150,
        height: 50,
        bottom: 40,
        right: 20
    },

    buttonCreate: {
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#000000',
        position: 'absolute',
        width: 150,
        height: 50,
        bottom: 40,
        left: 20
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '2%',  
    },

    npcContainer: {
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
        top: 150,
        opacity: 0.75,
    },

    centeredView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignContent: "space-around",
        paddingTop: "5%"
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

})