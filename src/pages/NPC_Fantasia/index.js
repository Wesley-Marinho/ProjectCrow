import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
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
  },
});

let Race, Gender, gender, genderAux, nome, x, y, Appearances, Abilities_baixa, Abilities_alta, Abilities_high,
  Abilities_low, higth, low, Talents, Mannerisms, Interactions, Ideals, Bonds, Secrets, RacaS;

const GENDERS_F = ["feminino", "ela", "sua", "dela", "Ela", "a", 'Feminino'],

  GENDERS_M = ["masculino", "ele", "sua", "dele", "Ele", "o", 'Masculino'],

  RACA = ["humano", "anão", "elfo", "hobbit", "meio-elfo", "gnomo", "meio-orc"],

  APPEARANCES = ["pelos seus brincos ornamentados", "pelo seu colar ornamentado", "pelos seus anéis ornamentados",
    "pelas suas pulseiras ornamentadas", "por ter muitos piercings", "pelas suas roupas estranhas",
    "pelas suas roupas impecáveis", "pelas suas roupas esfarrapadas", "por conta de uma cicatriz proeminente",
    "por alguns dentes faltando", "por ter perdido alguns dedos", "por conta de uma cor incomum dos olhos",
    "pelos seus olhos bicromáticos", "pelas suas tatuagens", "por conta de uma marca de nascença",
    "por conta de uma cor de pele incomum", "pela sua cabeça careca", "pelo seu cabelo trançado",
    "por conta de uma cor de cabelo incomum", "por um tique nos olhos", "pelo seu nariz estranho",
    "pela sua postura rígida", "por conta de uma beleza excepcional", "pela sua feiura perturbadora",],

  ABILITIES = ["força", "destreza", "constituição", "inteligência", "sabedoria", "carisma",],

  ABILITIES_HIGH = ["corajoso e forte", "ágil e gracioso", "resistente e saudável", "inteligente e curioso",
    "perceptivo e perspicaz", "persuasivo e manipulador",],

  ABILITIES_LOW = ["um pouco fraca", "um pouco desajeitada", "um pouco frágil", "meio idiota",
    "um pouco avoada", "meio entediante",],

  TALENTS = ["tocar violino", "tocar piano", "tocar o alaúde", "escrever mapas", "encontrar armadilhas",
    "fazer rastreamento de pessoas ou seres", "encontrar ingredientes raros", "obter informações",
    "falar em anão", "falar élfico", "falar em angelical", "falar em abissal", "ler runas", "criar armadilhas",
    "criar falsificações", "apostar", "memorização", "manipulação de animais", "manipular as pessoas",
    "resolução de quebra-cabeças", "jogar facas", "jogar xadrez", "jogar cartas", "realizar imitações",
    "desenhar", "pintar", "cantar", "transcrever magias", "consertar armas", "cozinhar", "enganar",
    "roubar", "malabarismo", "atuar", "criar antídotos e venenos",],

  MANNERISMS = ["cantar baixinho", "assobiar baixinho", "roer as unhas", "falar em rima", "falar em alto",
    "falar em baixo", "falar choramingando", "gaguejar", "ser enfático", "falar de coisas que não conhece",
    "sussurrar", "usar palavras complicadas", "escrever errado", "mentir", "ser exagerado", "fazer piadas",
    "falar pelas costas", "observar os arredores", "apertar os olhos", "ler", "mastigar tabaco",
    "ficar andando a esmo", "tamborilar com os dedos", "comer demais", "enrolar o cabelo nos dedos",
    "polir suas armas",],

  INTERACTIONS = ["argumentativa", "arrogante", "barulhenta", "rude", "curiosa", "amigável", "honesta",
    "explosiva", "tranquila", "suspeita",],

  IDEALS = ["a beleza", "a caridade", "o bem maior", "a vida", "o respeito", "o auto sacrifício",
    "a dominação dos fracos", "a ganância", "o poder", "o trabalho duro", "a retribuição",
    "o derramamento de sangue", "a comunidade", "a justiça", "a honra", "a lógica", "a responsabilidade",
    "a tradição", "a natureza", "a criatividade", "a liberdade", "a perfeição", "a autonomia",
    "o dinheiro", "o equilíbrio", "o conhecimento", "a lealdade", "a moderação", "a neutralidade",
    "as pessoas", "a ambição", "a curiosidade", "a glória", "o patriotismo", "a redenção", "a alma",],

  BONDS = ["a dedicação ao cumprimento de um objetivo pessoal", "a proteção de familiares próximos",
    "a proteção de colegas ou compatriotas", "a lealdade a um benfeitor", "a lealdade a um patrono",
    "um interesse romântico", "a proteção de um lugar específico", "a proteção de um legado",
    "a proteção de um item valioso", "a busca por vingança",],

  FLAWS_AND_SECRETS = ["tem uma suscetibilidade ao romance", "vem secretamente desfrutando de prazeres decadentes",
    "age de forma arrogante", "tem secretamente inveja da posse de outra criatura", "possui uma ganância avassaladora",
    "tem propensão a raiva", "tem um inimigo poderoso", "tem uma fobia específica", "tem uma história escandalosa",
    "cometeu um crime", "está na posse de um conhecimento proibido", "tem bravura imprudente",],

  anão_feminino = ["Amber", "Artin", "Audhild", "Bardryn", "Dagna", "Diesa", "Eldeth", "Falkrunn",
    "Finellen", "Gunkoda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa",
    "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra",],

  anão_masculino = ["Alberain ", "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor",
    "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak",
    "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin",],

  anão_surname = ["Dwarny", "Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge",
    "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart",],

  elfo_feminino = ["Lora", "Eveling", "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua",
    "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth",
    "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe",
    "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia",],

  elfo_masculino = ["Elgoth", "Riardon", "Rolen", "Adran", "Aelar", "Aramil",
    "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan",
    "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian",
    "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Aelar",
    "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan",
    "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion",
    "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis",],

  elfo_surname = ["Di Angelo", "Krokatun", "Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir",
    "Liadon", "Meliamne", "Nailo", "Siannodel", "Xiloscient",],

  gnomo_feminino = ["Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell",
    "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil",
    "Tana", "Waywocket", "Zanna",],

  gnomo_masculino = ["Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin",
    "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri",
    "Warryn", "Wrenn", "Zook",],

  gnomo_surname = ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen",
    "Timbers", "Turen",],

  hobbit_feminino = ["Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla",
    "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna",],

  hobbit_masculino = ["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle",
    "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby",],

  hobbit_surname = ["Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Lowe",
    "Tealeaf", "Thorngage", "Tosscobble", "Underbough",],

  humano_feminino = ["Arveene", "Atala", "Ceidil", "Esvele", "Hama", "Jasmal", "Jhessail", "Kerri", "Lureene",
    "Meilil", "Miri", "Rowana", "Silka", "Shandri", "Tessele", "Yasheira", "Zasheida", "Alethra", "Kara", "Katernin",
    "Mara", "Natali", "Olma", "Tana", "Zora", "Amafrey", "Betha", "Cefrey", "Kethra", "Olga", "Silifrey", "Westra",
    "Arizima", "Chathi", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis", "Fyevarra", "Hulmarra",
    "Immith", "Imzel", "Navarra", "Shevarra", "Tammith", "Yuldra", "Bai", "Chao", "Jia", "Lei", "Mei", "Qiao", "Shui",
    "Tai", "Balama", "Dona", "Faila", "Jalana", "Luisa", "Marta", "Quara", "Selise", "Vonda", "Yue", "Jenn", "Hize",
    "Nostri", "Moriri", "Hizre", "Yafru", "Miam", "Hipah", "Mua", "Dei", "Bev", "Felmj", "Let", "Nue", "Celreh", "Rairra",
    "Ofal", "Relvarru", "Nala", "Callie", "Freia", "Meyla", "Gwendoline", "Gabrielle", "Denyse", "Mariella", "Freda",
    "Viktoria", "Joanna", "Aliya", "Frauwa", "Edolie", "Gwenivere",],

  humano_masculino = ["Willun", "Opmet", "Aseir", "Bardeid", "Bor", "Darvin", "Dorn", "Evendur", "Fodel", "Gorstag", "Grim",
    "Haseid", "Helm", "Khemed", "Malark", "Mehmen", "Morn", "Randal", "Stedd", "Sudeiman", "Zasheir", "Glar", "Grigor", "Igan",
    "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor", "Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer",
    "Stor", "Taman", "Urth", "Aoth", "Bareris", "Ehput-Ki", "Kethoth", "Mumed", "Ramas", "So-Kuhur", "Thazar-De", "Urhur",
    "Borivik", "Faurgar", "Jandar", "Kanithar", "Madislak", "Ralmevik", "Shaumar", "Vladislak", "An", "Chen", "Chi", "Fai",
    "Jiang", "Jun", "Lian", "Long", "Meng", "On", "Shan", "Shui", "Wen", "Anton", "Diero", "Marcon", "Pieron", "Rimardo",
    "Romero", "Salazar", "Umbero", "Seizem", "Hazum", "Rocredd", "Urstad", "Hirer", "En", "Ulder", "Gruth", "Thak-Mun-Duf",
    "Kumuen", "Hiem", "Sibebai", "Sibos", "Digrodd", "Fizal", "Vaf", "Streth", "Vilromij", "Rirdid", "Ornirvin", "Chedrel",
    "Kogen", "Gregom",],

  humano_surname = ["Graybreard", "Zakar", "Amblecrown", "Basha", "Buckman", "Dumein", "Dundragon", "Evenwood", "Greycastle",
    "Jassan", "Khalid", "Mostana", "Pashar", "Rein", "Tallstag", "Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nametsk",
    "Shemov", "Starag", "Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver", "Ankhalab", "Anskuld",
    "Fezim", "Haphet", "Nathandem", "Sepret", "Uuthrakt", "Chergoba", "Dyernina", "Iltazyara", "Murnythara", "Stayanoga",
    "Ulmokina", "Chien", "Huang", "Kao", "Kung", "Lao", "Ling", "Mei", "Pin", "Shin", "Sum", "Tan", "Wan", "Agron", "Astorio",
    "Calabra", "Domine", "Falone", "Marivaldi", "Pimandumv", "Ramondo", "Dhuhuror", "Shodal", "Seacleaver", "Starsk",
    "Glarnuv", "Sachob", "Evomrenzi", "Bagenzal", "Gisehur", "Passu", "Bhodar", "Mistoak", "Rorirsk", "Vathift", "Tugotvi",
    "Ahesqa", "Stodz", "Longsnout", "Gomitvi", "Reku", "Mishon", "Redwing", "Muryeva", "Damme", "Glowguard", "Cliffspark",
    "Mutsu", "Xing", "Stinorsk", "Vupraft", "Stuvzaku", "Destidron", "Marblesteam", "Gron", "Korkan", "Sildigin", "Bidruse",
    "Rakan", "Snowpike", "Nihle",],

  meioorc_feminino = ["Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Suutha", "Vola",
    "Volen", "Yevelda",],

  meioorc_masculino = ["Dench", "Gell", "Henk", "Hold", "Imsh", "Keth", "Krusk", "Mhurren",
    "Ront", "Shump", "Thokk",];

function setNome(Race, Gender) {
  if (Race == "elfo" && Gender == "feminino") {
    x = elfo_feminino[Math.floor(Math.random() * elfo_feminino.length)];
    y = elfo_surname[Math.floor(Math.random() * elfo_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "elfo" && Gender == "masculino") {
    x = elfo_masculino[Math.floor(Math.random() * elfo_masculino.length)];
    y = elfo_surname[Math.floor(Math.random() * elfo_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "anão" && Gender == "feminino") {
    x = anão_feminino[Math.floor(Math.random() * anão_feminino.length)];
    y = anão_surname[Math.floor(Math.random() * anão_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "anão" && Gender == "masculino") {
    x = anão_masculino[Math.floor(Math.random() * anão_masculino.length)];
    y = anão_surname[Math.floor(Math.random() * anão_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "gnomo" && Gender == "feminino") {
    x = gnomo_feminino[Math.floor(Math.random() * gnomo_feminino.length)];
    y = gnomo_surname[Math.floor(Math.random() * gnomo_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "gnomo" && Gender == "masculino") {
    x = gnomo_masculino[Math.floor(Math.random() * gnomo_masculino.length)];
    y = gnomo_surname[Math.floor(Math.random() * gnomo_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "hobbit" && Gender == "feminino") {
    x = hobbit_feminino[Math.floor(Math.random() * hobbit_feminino.length)];
    y = hobbit_surname[Math.floor(Math.random() * hobbit_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "hobbit" && Gender == "masculino") {
    x = hobbit_masculino[Math.floor(Math.random() * hobbit_masculino.length)];
    y = hobbit_surname[Math.floor(Math.random() * hobbit_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "humano" && Gender == "feminino") {
    x = humano_feminino[Math.floor(Math.random() * humano_feminino.length)];
    y = humano_surname[Math.floor(Math.random() * humano_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "humano" && Gender == "masculino") {
    x = humano_masculino[Math.floor(Math.random() * humano_masculino.length)];
    y = humano_surname[Math.floor(Math.random() * humano_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "meio-elfo" && Gender == "feminino") {
    x = humano_feminino[Math.floor(Math.random() * humano_feminino.length)];
    y = elfo_surname[Math.floor(Math.random() * elfo_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "meio-elfo" && Gender == "masculino") {
    x = humano_masculino[Math.floor(Math.random() * humano_masculino.length)];
    y = elfo_surname[Math.floor(Math.random() * elfo_surname.length)];
    nome = x + " " + y;
  }
  if (Race == "meio-orc" && Gender == "feminino") {
    nome =
      meioorc_feminino[Math.floor(Math.random() * meioorc_feminino.length)];
  }
  if (Race == "meio-orc" && Gender == "masculino") {
    nome =
      meioorc_masculino[Math.floor(Math.random() * meioorc_masculino.length)];
  }
  return nome;
}

function NPC() {
  genderAux = Math.floor(Math.random() * 2);
  if (genderAux == 0) {
    gender = GENDERS_F;
  } else {
    gender = GENDERS_M;
  }
  Gender = gender[0];
  Race = RACA[Math.floor(Math.random() * RACA.length)];

  setNome(Race, Gender)

  Appearances = APPEARANCES[Math.floor(Math.random() * APPEARANCES.length)];

  //configurando skills
  higth = Math.floor(Math.random() * ABILITIES.length);
  Abilities_alta = ABILITIES[higth];
  Abilities_high = ABILITIES_HIGH[higth];
  do {
    low = Math.floor(Math.random() * ABILITIES.length);
  } while (low == higth);

  Abilities_baixa = ABILITIES[low];
  Abilities_low = ABILITIES_LOW[low];
  //fim configurando skills

  Mannerisms = MANNERISMS[Math.floor(Math.random() * MANNERISMS.length)];
  Interactions = INTERACTIONS[Math.floor(Math.random() * INTERACTIONS.length)];
  Ideals = IDEALS[Math.floor(Math.random() * IDEALS.length)];
  Bonds = BONDS[Math.floor(Math.random() * BONDS.length)];
  Secrets = FLAWS_AND_SECRETS[Math.floor(Math.random() * FLAWS_AND_SECRETS.length)];
  Talents = TALENTS[Math.floor(Math.random() * TALENTS.length)];

  //Ajuste de raça
  if (Race == 'humano') {
    RacaS = 'Humano'
  }
  if (Race == 'elfo') {
    RacaS = 'Elfo'
  }
  if (Race == 'anão') {
    RacaS = 'Anão'
  }
  if (Race == 'hobbit') {
    RacaS = 'Hobbit'
  }
  if (Race == 'meio-elfo') {
    RacaS = 'Meio-elfo'
  }
  if (Race == 'gnomo') {
    RacaS = 'Gnomo'
  }
  if (Race == 'meio-orc') {
    RacaS = 'Meio-orc'
  }

  return (
    "Nome: " + nome + "\n" + "Raça: " + RacaS + "\n" + "Sexo: " + gender[6] + "\n" + "\n" +
    "Do sexo " + gender[0] + " e da raça " + Race + ", " + nome + " se destaca " + Appearances +
    " e apresenta excepcional " + Abilities_alta + " o que " + gender[5] + " torna um ser notoriamente " +
    Abilities_high + ". Porem, " + gender[1] + " também pode ser uma criatura " + Abilities_low +
    " por conta de " + gender[2] + " falta de " + Abilities_baixa + ". Mostrando talento em " +
    Talents + ", " + nome + ", tem o hábito de " + Mannerisms + " e normalmente age de forma " +
    Interactions + ". Tendo como prioridade " + Ideals + " e como motivação " + Bonds + ", " +
    gender[1] + " " + Secrets + "."
  )
}

export default function App() {
  const [inforNPC, setNPC] = useState(NPC());
  const { user: usuario } = useContext(AuthContext);

  let [fontsLoaded] = useFonts({
    NovaMono_400Regular,
  });

  async function salvar() {
    let uid = usuario.uid;
    let key = await firebase.database().ref('npcF').child(uid).push().key;
    await firebase.database().ref('npcF').child(uid).child(key).set({
      infor: inforNPC
    })
    Alert.alert('Pronto!', 'NPC Salvo.')
  }

  if (!fontsLoaded) {
    return <AppLoading />;
    
  } else {

  return (
    <LinearGradient colors={['#ffffff', '#9500F5',]}
    style = {global.LinearGradientHome}>
      
      <View style={style.imgContainer}>
        <Image
          style={style.imgChat}
          source={require('../../img/icon.png')}
        />
      </View>


      <View style = {style.npcContainer}>
        <Text style = {font.textBody}>{inforNPC}</Text>
      </View>


      <View style = {style.centeredView}>

        <TouchableOpacity style={style.buttonCreate}
          onPress={() => setNPC(NPC())}>
          <View >
          <Text style = {font.buttonText}>Criar NPC</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonSave}
          onPress={salvar}>
          <View >
            <Text style = {font.buttonText}>Salvar NPC</Text>
          </View>
        </TouchableOpacity>

        
      </View>

    </LinearGradient>
  );}
}