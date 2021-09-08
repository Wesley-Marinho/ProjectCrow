import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    textInput: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 50,
        height: 45,
        width: "85%",
        fontSize: 17,
    },

    tittle: {
        color: '#ffffff',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    summary: {
        color: '#ffffff',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    textBody: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
    },

    button: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#000000',
        width: 50,

    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '2%',
        paddingTop: '10%',
    },

    listContainer: {
        backgroundColor: '#000000',
        opacity: 0.8,
        padding: '2%',
        margin: '2%',
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

    textInput:{
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 50,
        height: 45,
        width: "85%",
        fontSize: 17,
      
    },

    textInputSummary:{
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 50,
        height: "50%",
        width: "95%",
        fontSize: 17,
        textAlign: 'center'
    },

    tittleModal: {
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: "10%",
        textAlign: 'center'
    }

})