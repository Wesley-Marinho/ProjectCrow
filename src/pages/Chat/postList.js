import React, { Component } from "react";
import { Text, View } from "react-native";
import style from "./style.js";
class App extends Component {
    render() {
        return (

            <View style={style.listContainer}>
                <Text style={style.tittle}>Titulo</Text>
                <Text style={style.textBody}>Resumo</Text>
                <Text style={style.textBody}>Numero de vagas: </Text>
                <Text style={style.textBody}>Contato: </Text>
            </View>

        );
    }
}

export default App;