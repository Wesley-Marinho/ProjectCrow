import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    
    tittle: {
        color: '#ffffff',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    body: {
        color: '#ffffff',
        fontSize: 15,
        textAlign: "left",
        fontWeight: 'bold',
        paddingTop: '10%'
    },

    img: {
        width: 120,
        height: 120,
        borderRadius: 10
    },

    listContainer: {
        flexDirection:"row",
        backgroundColor: '#000000',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },

    listItens: {
        padding: 10
    }
})