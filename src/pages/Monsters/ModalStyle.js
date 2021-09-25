import { StyleSheet } from 'react-native';


export default StyleSheet.create({

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

    submitButton: {
        backgroundColor: '#000000',
        borderRadius: 100,
        padding: 10,
        elevation: 2,
        width: 50,
        height: 50
    },

    closeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: "10%"
    },

    textBody: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    tittleModal: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: "10%",
        textAlign: 'center'
    }

})