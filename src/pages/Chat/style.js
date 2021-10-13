import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    tittleContainer: {
        paddingVertical: "10%"
    },

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
        top: 150,
        opacity: 0.75,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',

    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalItems: {
        alignItems: 'center',
    },
    openButton: {
        backgroundColor: '#000000',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },

    closeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: "10%"
    },


})