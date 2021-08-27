import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';

function loader() {
    const [loaded] = useFonts({
        Persona: require('../../assets/fonts/Persona.ttf'),
    });

    if (!loaded) {
        return null;
    }
}

export default StyleSheet.create({

    tittle: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 20,
      
    },
    container: {
        alignItems: 'center',
        paddingTop: 20

    },
    link: {
        color: '#ffffff',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        justifyContent: 'center',
        borderWidth: 5,
        borderRadius: 100,
        backgroundColor: '#000000',
        width: 200,
        height: 50,
    },

})