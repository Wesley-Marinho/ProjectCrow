import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    monsterButton: {
        position: 'absolute',
        right: '1%',
        top: "0.5%",
        backgroundColor: '#7A0400',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: 45,
        height: 45,

    },
    infoButton: {
        position: 'absolute',
        right: '15%',
        top: "0.5%",
        backgroundColor: '#7A0400',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: 45,
        height: 45,

    },
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
        color: '#000000',
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
})