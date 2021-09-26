import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    imgContainer: {
        alignItems: 'center',
    },

    diceContainer: {
        justifyContent: "space-around",
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '2%'
    },
    logo: {
        width: 290,
        height: 450,
        position: 'absolute',
        top: 50,
        opacity: 0.75,
    },

    textButton: {
        color: '#ffffff',
        fontSize: 20,
        paddingHorizontal: 4,
        textAlign: 'center',
    },

    text: {
        color: '#000000',
        fontSize: 20,
        paddingHorizontal: 4,
        textAlign: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    button: {
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#000000',
        width: 50,
        height: 50,
    },
})