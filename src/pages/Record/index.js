import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet, Image, ScrollView } from "react-native";
import { AuthContext } from '../../contexts/auth';
import firebase from '../../database/firebaseConnection';
import global from "../../style/global.js"
import style from "./style.js"
import AppLoading from 'expo-app-loading';
import { useFonts, NovaMono_400Regular } from '@expo-google-fonts/nova-mono';

const font = StyleSheet.create({
  buttonText: {
    fontFamily: 'NovaMono_400Regular',
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',

  },

  textBody: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: 'NovaMono_400Regular',
    paddingBottom: 10
  },
});

let Race, Background, Class, Armor, Resistance, Skills, Life, Equipment, Weapons, Tools, Dice = 0,
  Stats = [], Mods = [], Displacement, Additional, backgroundSkills, backgroundLanguages, raceLanguages, backgroundEquipment,
  backgroundTools;

const RACA = ["Humano", "Anão", "Elfo", "Tiefling", "Meio-elfo", "Gnomo", "Meio-orc", "Draconato", "Halfling"],

  CLASS = ["Bárbaro", "Bardo", "Bruxo", "Clérigo", "Druida", "Feiticeiro", "Guerreiro", "Ladino", "Mago", "Monge", "Paladino", "Patrulheiro"],

  BACKGROUND = ["Acólito", "Artesão de Guilda", "Charlatão", "Criminoso", "Eremita", "Nobre",
    "Forasteiro", "Marinheiro", "Sábio", "Soldado", "Orfão"];


function calc() {
  for (let i = 0; i < 3; i++) {
    Dice += Math.floor(Math.random() * 6) + 1
  }
  return Dice
}

function stats() {


  Stats[0] += calc()
  Dice = 0
  Stats[1] += calc()
  Dice = 0
  Stats[2] += calc()
  Dice = 0
  Stats[3] += calc()
  Dice = 0
  Stats[4] += calc()
  Dice = 0
  Stats[5] += calc()
  Dice = 0

  for (let i = 0; i < Stats.length; i++) {
    if (Stats[i] <= 3) {
      Mods[i] = "-4"
    }
    if (Stats[i] >= 4 && Stats[i] <= 5) {
      Mods[i] = "-3"
    }

    if (Stats[i] >= 6 && Stats[i] <= 7) {
      Mods[i] = "-2"
    }

    if (Stats[i] >= 8 && Stats[i] <= 9) {
      Mods[i] = "-1"
    }

    if (Stats[i] >= 10 && Stats[i] <= 11) {
      Mods[i] = "0"
    }

    if (Stats[i] >= 12 && Stats[i] <= 13) {
      Mods[i] = "+1"
    }

    if (Stats[i] >= 14 && Stats[i] <= 15) {
      Mods[i] = "+2"
    }

    if (Stats[i] >= 16 && Stats[i] <= 17) {
      Mods[i] = "+3"
    }

    if (Stats[i] >= 18 && Stats[i] <= 19) {
      Mods[i] = "+4"
    }

    if (Stats[i] >= 20 && Stats[i] <= 21) {
      Mods[i] = "+5"
    }

    if (Stats[i] >= 22 && Stats[i] <= 23) {
      Mods[i] = "+6"
    }

    if (Stats[i] >= 24 && Stats[i] <= 25) {
      Mods[i] = "+7"
    }

    if (Stats[i] >= 26 && Stats[i] <= 27) {
      Mods[i] = "+8"
    }
  }


}

function races() {
  if (Race == 'Humano') {
    Additional = "+1 em todos os atributos"
    Displacement = "9m"
    raceLanguages = "Qualquer idioma de sua escolha e comum"
  }

  if (Race == 'Elfo') {
    Stats[1] += 2;
    Additional = "Nenhum"
    Displacement = "9m"
    raceLanguages = "Elfico e comum"
  }

  if (Race == 'Anão') {
    Stats[2] += 2;
    Additional = "Nenhum"
    Displacement = "7,5m"
    raceLanguages = "Anão e comum"
  }

  if (Race == 'Tiefling') {
    Stats[3] += 1;
    Stats[5] += 2;
    Additional = "Nenhum"
    Displacement = "9m"
    raceLanguages = "Infernal e comum"
  }

  if (Race == 'Meio-elfo') {
    Stats[5] += 2;
    Additional = "+1 em dois atributos de sua escolha"
    Displacement = "7,5m"
    raceLanguages = "Elfico, comum e mais um idoma de sua escolha"
  }

  if (Race == 'Gnomo') {
    Stats[3] += 2;
    Additional = "Nenhum"
    Displacement = "7,5m"
    raceLanguages = "Gnomico e comum"
  }

  if (Race == 'Meio-orc') {
    Stats[0] += 2;
    Stats[2] += 1;
    Additional = "Nenhum"
    Displacement = "9m"
    raceLanguages = "Orc e comum"
  }

  if (Race == 'Draconato') {
    Stats[0] += 2;
    Stats[5] += 1;
    Additional = "Nenhum"
    Displacement = "9m"
    raceLanguages = "Dracônico e comum"
  }

  if (Race == "Halfling") {
    Stats[1] += 2;
    Additional = "Nenhum"
    Displacement = "7,5m"
    raceLanguages = "Halfling e comum"
  }
}

function background() {
  if (Background == "Acólito") {
    backgroundSkills = "Intuição e Religião."
    backgroundEquipment = "Um símbolo sagrado (um presente dado a você quando entrou para o sacerdócio), um livro de orações ou uma roda de preces, 5 palitos de incenso, vestimentas, um conjunto de roupas comuns e uma algibeira contendo 15 peças de ouro"
    backgroundLanguages = "Dois a sua escolha"
    backgroundTools = "Nenhuma"
  }

  if (Background == "Artesão de Guilda") {
    backgroundSkills = "Intuição e Persuasão."
    backgroundEquipment = "Um conjunto de ferramentas de artesão (de sua escolha), uma carta de apresentação da sua guilda, um conjunto de roupas de viagem e uma algibeira contendo 15 peças de ouro."
    backgroundLanguages = "Um da sua escolha"
    backgroundTools = "Um tipo de ferramentas de artesão."
  }
  if (Background == "Charlatão") {
    backgroundSkills = "Enganação e Prestidigitação."
    backgroundEquipment = "Um conjunto de roupas finas, um kit de disfarce, ferramentas de enganação a sua escolha (dez garrafas fechadas com rolha cheias com líquidos coloridos, um conjunto de dados viciados, um baralho de cartas marcadas ou um anel de sinete de um duque imaginário) e uma algibeira contendo 15 peças de ouro"
    backgroundLanguages = "Nenhum"
    backgroundTools = "Kit de disfarce, kit de falsificação."
  }
  if (Background == "Criminoso") {
    backgroundSkills = "Enganação, Furtividade"
    backgroundEquipment = "Um pé de cabra, um conjunto de roupas escuras comuns com capuz e uma algibeira contendo 15 peças de ouro."
    backgroundLanguages = "Nenhum"
    backgroundTools = "Um tipo de conjunto de jogos, ferramentas de ladino"
  }
  if (Background == "Eremita") {
    backgroundSkills = "Medicina e Religião"
    backgroundEquipment = "Um porta pergaminho recheado de notas de seus estudos ou orações, um cobertor de inverno, um conjunto de roupas comuns, um kit de herbalismo e 5 peças de ouro."
    backgroundLanguages = "Um da sua escolha"
    backgroundTools = "Um tipo de conjunto de jogos, ferramentas de ladino"
  }
  if (Background == "Nobre") {
    backgroundSkills = "História, Persuasão"
    backgroundEquipment = "Um conjunto de roupas finas, um anel de sinete, um pergaminho de linhagem e uma bolsa contendo 25 peças de ouro."
    backgroundLanguages = "Um da sua escolha"
  }
  if (Background == "Forasteiro") {
    backgroundSkills = "Atletismo, Sobrevivência"
    backgroundEquipment = "Um cajado, uma armadilha de caça, um troféu de um animal que você matou, um conjunto de roupas de viajante e uma bolsa algibeira contendo 10 peças de ouro."
    backgroundLanguages = "Um da sua escolha"
    backgroundTools = "Um tipo de instrumento musical"
  }
  if (Background == "Marinheiro") {
    backgroundSkills = "Atletismo, Percepção"
    backgroundEquipment = "Uma malagueta (porrete), 15 metros de corda de seda, um amuleto da sorte como um pé de coelho ou uma pequena moeda com um buraco no meio (ou você pode rolar uma bugiganga aleatória na tabela Bugigangas no Capítulo 5), um conjunto de roupas comuns e uma algibeira contendo 10 peças de ouro."
    backgroundLanguages = "Nenhum"
    backgroundTools = "Ferramentas de navegador, veículos (marítimo)"
  }
  if (Background == "Sábio") {
    backgroundSkills = "Arcanismo, História"
    backgroundEquipment = "Um vidro de tinta negra, uma pena, uma faca pequena, uma carta de um falecido colega lhe perguntando algo que nunca terá a chance de responder, um conjunto de roupas comuns e uma algibeira contendo 10 peças de ouro."
    backgroundLanguages = "Dois a sua escolha"
    backgroundTools = "Nenhuma"
  }
  if (Background == "Soldado") {
    backgroundSkills = "Atletismo, Intimidação"
    backgroundEquipment = "Uma insígnia de patente, um troféu obtido de um inimigo caído (uma adaga, lâmina quebrada ou pedaço de um estandarte), um conjunto de dados de osso ou cartas de baralho, um conjunto de roupas comuns e uma algibeira contendo 10 peças de ouro."
    backgroundLanguages = "Nenhuma"
    backgroundTools = "Um tipo de conjunto de jogos, veículos (terrestres)"
  }
  if (Background == "Orfão") {
    backgroundSkills = "Prestidigitação, Furtividade."
    backgroundEquipment = "Uma pequena faca, um mapa da cidade que você cresceu, um rato de estimação, um símbolo para lembrar seus pais, um conjunto de roupas comuns e uma algibeira contendo 10 peças de ouro."
    backgroundLanguages = "Nenhum"
    backgroundTools = "Um kit de disfarces, ferramentas de ladino"
  }
}

function classes() {
  if (Class == "Bárbaro") {
    Life = "PV 1º nível: 12 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d12 (ou 7) + mod de Constituição";

    Armor = "Leves, Médias e escudos."

    Resistance = "Força e Constituição."

    Weapons = "Simples e marciais"

    Tools = "Nenhuma"

    Skills = "Escolha duas entre Adestrar Animais, Atletismo, Intimidação, Natureza, Percepção e Sobrevivência"

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) Um machado grande ou (b) qualquer arma marcial corpo-a-corpo;" + "\n" +
      "(a) Duas machadinhas ou (b) qualquer arma simples;" + "\n" +
      "Um pacote do explorador e quatro azagaias"
  }

  if (Class == "Bardo") {
    Life = "PV 1º nível: 8 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d8 (ou 5) + mod de Constituição";

    Armor = "Leves."

    Resistance = "Destreza e Carisma."

    Weapons = "Simples, besta de mão, espada curta, espada longa, florete;"

    Tools = "Escolha três instrumentos musicais"

    Skills = "Escolha três que quiser"

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) Um florete, (b) Uma espada longa, ou (c) qualquer arma simples" + "\n" +
      "(a) Pacote do diplomata ou (b) Pacote do artista" + "\n" +
      "(a) Um alaúde ou (b) qualquer outro instrumento musical" + "\n" +
      "Corselete de couro e uma adaga"
  }

  if (Class == "Bruxo") {
    Life = "PV 1º nível: 8 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d8 (ou 5) + mod de Constituição";

    Armor = "Leves."

    Resistance = "Sabedoria e Carisma."

    Weapons = "Simples."

    Tools = "Nenhuma."

    Skills = "Escolha duas entre Arcanismo, Enganação, História, Intimidação, Investigação, Natureza e Religião."

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) uma besta leve e 20 virotes ou (b) qualquer arma simples." + "\n" +
      "(a) uma bolsa de componentes ou (b) um foco arcano" + "\n" +
      "(a) um pacote de estudioso ou (b) um pacote de masmorra" + "\n" +
      "Corselete de couro, qualquer arma simples, e duas adagas"
  }

  if (Class == "Clérigo") {
    Life = "PV 1º nível: 8 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d8 (ou 5) + mod de Constituição";

    Armor = "Leves, médias e escudos."

    Resistance = "Sabedoria e Carisma."

    Weapons = "Simples."

    Tools = "Nenhuma."

    Skills = "Escolha duas entre História, Intuição, Medicina, Persuasão e Religião."

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) uma maça ou (b) um machado de batalha (se proficiente)" + "\n" +
      "(a) armadura de escamas, (b) armadura de couro, ou (c) cota de malha (se proficiente)." + "\n" +
      "(a) uma besta leve e 20 virotes ou (b) uma arma simples" + "\n" +
      "(a) Pacote de sacerdote ou (b) um pacote de explorador" + "\n" +
      "Um escudo e um símbolo sagrado"
  }

  if (Class == "Druida") {
    Life = "PV 1º nível: 8 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d8 (ou 5) + mod de Constituição";

    Armor = "leves, médias e escudos (druidas não usam armadura ou escudo de metal)."

    Resistance = "Inteligência e Sabedoria."

    Weapons = "Adagas, azagaias, bordões, cimitarras, clavas, dardos, foices, funda, lanças, maças."

    Tools = "kit de Herbalismo."

    Skills = "Escolha duas entre Adestrar Animais, Arcanismo, Intuição, Natureza, Medicina, Percepção, Religião e Sobrevivência." + "\n"

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) Um escudo de madeira ou (b) qualquer arma simples" + "\n" +
      "(a)Uma cimitarra ou (b) qualquer arma corpo a corpo simples." + "\n" +
      "Corselete de couro, pacote do explorador e um foco druídico."
  }

  if (Class == "Feiticeiro") {
    Life = "PV 1º nível: 6 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d6 (ou 4) + mod de Constituição";

    Armor = "Nenhuma."

    Resistance = "Constituição e Carisma."

    Weapons = "Adaga, besta leve, cajado, dardo e funda."

    Tools = "Nenhuma."

    Skills = "Escolha duas de Arcanismo, Enganação, Intimidação, Intuição, Persuasão e Religião."

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) Um besta leve e 20 virotes ou (b) qualquer arma simples" + "\n" +
      "(a) Uma bolsa de componentes ou (b) um foco arcano." + "\n" +
      "(a) Pacote de masmorra ou (b) um pacote do explorador" + "\n" +
      "Duas adagas"
  }

  if (Class == "Guerreiro") {
    Life = "PV 1º nível: 10 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d10 (ou 6) + mod de Constituição";

    Armor = "Leves, médias, pesadas e escudos."

    Resistance = "Força e Constituição."

    Weapons = "Simples e marciais."

    Tools = "Nenhuma."

    Skills = "Escolha duas entre Acrobacia, Adestrar Animais, Atletismo, História, Intuição, Intimidação, Percepção e Sobrevivência."

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) Cota de malha ou (b) corselete de couro, arco longo e 20 flechas." + "\n" +
      "(a) Uma arma marcial e um escudo ou (b) duas armas marciais" + "\n" +
      "(a) Uma besta leve e 20 virotes ou (b) duas machadinhas" + "\n" +
      "(a) Um pacote de masmorra ou (b) um pacote de explorador"
  }

  if (Class == "Ladino") {
    Life = "PV 1º nível: 8 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d8 (ou 5) + mod de Constituição";

    Armor = "Leves."

    Resistance = "Destreza e Inteligência;."

    Weapons = "simples, besta de mão, espada curta, espada longa, rapieira."

    Tools = "Ferramentas de ladino."

    Skills = "Escolha quatro entre Acrobacia, Atletismo, Atuação, Enganação, Furtividade, Intimidação, Intuição, Percepção, Persuasão e Prestidigitação."

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) Uma rapiera ou (b) uma espada longa;" + "\n" +
      "(a) Um arco curto e aljava com 20 flechas ou (b) uma espada curta" + "\n" +
      "(a) Pacote de assaltante ou (b) pacote de masmorra ou (c) pacote de exploração" + "\n" +
      "Corselete de couro, duas adagas e as ferramentas de ladino."
  }

  if (Class == "Mago") {
    Life = "PV 1º nível: 6 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d6 (ou 4) + mod de Constituição";

    Armor = "Nenhuma."

    Resistance = "Inteligência e Sabedoria."

    Weapons = "Adaga, besta leve, cajado, dardo e funda."

    Tools = "Nenhuma."

    Skills = "scolha duas de Arcanismo, História, Intuição, Investigação, Medicina e Religião."

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) Um cajado ou (b) uma adaga" + "\n" +
      "(a) Uma bolsa de componentes (b) um foco arcano" + "\n" +
      "(a) Pacote do estudioso ou (b) um pacote do explorador" + "\n" +
      "Um grimório."
  }

  if (Class == "Monge") {
    Life = "PV 1º nível: 8 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d8 (ou 5) + mod de Constituição";

    Armor = "Nenhuma."

    Resistance = "Força e Destreza."

    Weapons = "Simples e espada curta."

    Tools = "Nenhuma."

    Skills = "Escolha duas entre Acrobacia, Atletismo, História, Intuição, Religião e Furtividade."

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) Uma espada curta ou (b) qualquer arma simples" + "\n" +
      "(a) Pacote de masmorra ou (b) pacote de explorador;" + "\n" +
      "10 dardos"
  }

  if (Class == "Paladino") {
    Life = "PV 1º nível: 10 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d10 (ou 6) + mod de Constituição";

    Armor = "Leves, médias, pesadas e escudos."

    Resistance = "Sabedoria e Carisma."

    Weapons = "Adaga, besta leve, cajado, dardo e funda."

    Tools = "Nenhuma."

    Skills = "Escolha duas entre Atletismo,, Intimidação, Medicina, Percepção, Persuasão e Religião."

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) uma arma marcial e um escudo ou (b) duas armas marciais" + "\n" +
      "(a) cinco dardos ou (b) qualquer arma branca simples." + "\n" +
      "(a) Pacote de um sacerdote ou (b) a pacote de explorador" + "\n" +
      "Cota de malha e um símbolo sagrado."
  }

  if (Class == "Patrulheiro") {
    Life = "PV 1º nível: 10 + mod de Constituição" + "\n"
      + "PV níveis posteriores: 1d10 (ou 6) + mod de Constituição";

    Armor = "Leves, médias e escudos."

    Resistance = "Força e Destreza."

    Weapons = "Simples e marciais."

    Tools = "Nenhuma."

    Skills = "Escolha três entre Adestrar Animais, Atletismo, Furtividade, Intimidação, Intuição, Natureza, Percepção e Sobrevivência."

    Equipment = "Você começa com o equipamento a seguir, além do equipamento do seu antecedente:" + "\n" +
      "(a) brunea ou (b) corselete de couro" + "\n" +
      "(a) duas espadas curtas ou (b) duas armas corpo a corpo simples" + "\n" +
      "(a) um pacote de masmorra ou (b) um pacote de exploração" + "\n" +
      "Um arco longo e uma aljava com 20 flechas."
  }
}

function Record() {

  Race = RACA[Math.floor(Math.random() * RACA.length)];
  Background = BACKGROUND[Math.floor(Math.random() * BACKGROUND.length)];
  Class = CLASS[Math.floor(Math.random() * CLASS.length)];

  for (let i = 0; i < Stats.length; i++) {
    Stats[i] = 0;
  }

  races();
  stats();
  classes();
  background();

  return (
    "Raça: " + Race + "\n" +
    "Classe: " + Class + "\n" +
    "Antecedente: " + Background + "\n" +
    "Pontos de vida: " + Life + "\n" +
    "Deslocamento " + Displacement + "\n" +
    "Resistencia em :" + Resistance + "\n" +
    "Idioma da raça: " + raceLanguages + "\n" +
    "Idioma dos antecedentes: " + backgroundLanguages + "\n" + "\n" +

    "Proeficiencia em armadura: " + Armor + "\n" +
    "Proeficiencia em armas: " + Weapons + "\n" +
    "Proeficiencia em ferramentas: " + Tools + "\n" +
    "Proeficiencia em habilidades: " + Skills + "\n" +
    "Proeficiencia em habilidades dos antecedentes: " + backgroundSkills + "\n" +
    "Proeficiencia em ferramentas dos antecedentes: " + backgroundTools + "\n" + "\n" +

    "Adicional: " + Additional + "\n" +
    "Força: " + Stats[0] + " " + Mods[0] + "\n" +
    "Destreza: " + Stats[1] + " " + Mods[1] + "\n" +
    "Constituição: " + Stats[2] + " " + Mods[2] + "\n" +
    "Inteligencia: " + Stats[3] + " " + Mods[3] + "\n" +
    "Sabedoria: " + Stats[4] + " " + Mods[4] + "\n" +
    "Carisma: " + Stats[5] + " " + Mods[5] + "\n" + "\n" +

    "Equipamento: " + Equipment +
    "Equipamento dos antecedentes: " + backgroundEquipment
  )
}

export default function App() {


  const { user: usuario } = useContext(AuthContext);
  const [infoRecord, setRecord] = useState(Record());

  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });

  async function salvar() {
    let uid = usuario.uid;
    let key = await firebase.database().ref('record').child(uid).push().key;
    await firebase.database().ref('record').child(uid).child(key).set({
      info: infoRecord
    })
    Alert.alert('Pronto!', 'Ficha Salva.')
  }

  if (!fontsLoaded) {
    return <AppLoading />;

  } else {

    return (
      <LinearGradient colors={['#ffffff', '#363434',]}
        style={global.LinearGradientHome}>

        <View style={style.imgContainer}>
          <Image
            style={style.imgChat}
            source={require('../../img/icon.png')}
          />
        </View>

        
          <ScrollView style={style.npcContainer}>
            <Text style={font.textBody}>{infoRecord}</Text>
          </ScrollView>
        
        <View style={style.actionButtonContainer}>
        <TouchableOpacity style={style.buttonCreate}
          onPress={() => setRecord(Record())}>
          <View >
            <Text style={font.buttonText}>Criar Ficha</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonSave}
          onPress={salvar}>
          <View >
            <Text style={font.buttonText}>Salvar Ficha</Text>
          </View>
        </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}