import React from 'react';
import { Text, View } from 'react-native';
import style from './style.js';
export default function List({ data }) {
    return (

        <View style={style.listContainer}>
            <Text style={style.tittle}>{data.tittle}</Text>
            <Text style={style.textBody}>Resumo da campanha: {data.summary}</Text>
            <Text style={style.textBody}>Numero de vagas: {data.vacancies}</Text>
            <Text style={style.textBody}>Contato: {data.contact}</Text>
        </View>

    );
}