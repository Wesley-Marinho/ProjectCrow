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

    label: {
        color: '#000000',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    tittle: {
        color: '#ffffff',
        fontSize: 30,
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
        padding: 10,
        paddingTop: 40,
    },

    listContainer: {
        backgroundColor: '#000000',
        opacity: 0.8,
        padding: 10,
        margin: 10,
    },

    listItens: {
        padding: 10
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
    }
})