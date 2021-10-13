import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import style from './style.js';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';

export default function List({ data }) {
    let [fontsLoaded] = useFonts({
        NovaMono_400Regular,
      });

      const font = StyleSheet.create({
        tittle: {
          fontFamily: 'NovaMono_400Regular',
          color: '#ffffff',
          fontSize: 20,
          textAlign: 'center',
        },

        textBody: {
          color: '#ffffff',
          fontSize: 15,
          fontFamily: 'NovaMono_400Regular',
        },
      });
    return (

        <View style={style.listContainer}>
            <Text style={font.tittle}>{data.tittle}</Text>
            <Text style={font.textBody}>Sistema da campanha: {data.system}</Text>
            <Text style={font.textBody}>Numero de vagas: {data.vacancies}</Text>
            <Text style={font.textBody}>Contato: {data.contact}</Text>
        </View>

    );
}