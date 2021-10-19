import { FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Chat from "../pages/Chat";
import Items from '../pages/Items';
import LogOut from '../pages/LogOut';
import Maps from '../pages/Maps';
import CrowIsland from '../pages/MapsList/Small/CrowIsland';
import Doughnut from '../pages/MapsList/Small/CrowIsland/location/castleDoughnut';
import MageLabirinty from '../pages/MapsList/Small/CrowIsland/location/dungeonMageLabirinty';
import Haum from '../pages/MapsList/Small/CrowIsland/location/forestHaun';
import Noir from '../pages/MapsList/Small/CrowIsland/location/forestNoir';
import OfStone from '../pages/MapsList/Small/CrowIsland/location/forestOfStone';
import Caruaru from '../pages/MapsList/Small/CrowIsland/location/villageCaruaru';
import Yamogum from '../pages/MapsList/Small/CrowIsland/location/villageYamogum';
import BigMap from '../pages/MapType/BigMap';
import MediumMap from '../pages/MapType/MediumMap';
import SmallMap from '../pages/MapType/SmallMap';
import MonsterPick from '../pages/MonsterPick';
import Monster from '../pages/Monsters';
import Dice from '../pages/DicePage';
import Galeria_Fantasia from '../pages/NPC_Fantasia_Galeria';
import NPC_Fantasia from "../pages/NPC_Fantasia";
import Player from '../pages/Player';
import Master from '../pages/Master';
import Magic from '../pages/Magic';
import Record from '../pages/Record';
import RecordGallery from '../pages/RecordGallery';
import Armor from '../pages/Armor'
import Equipment from '../pages/Equipment'
import Weapon from '../pages/Weapon'


const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#3202D1',
                    border: 0,
                },
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#3202D1',
                activeBackgroundColor: '#000000',
                inactiveTintColor: '#ffffff',
            }}>
            <Tab.Screen name="Mestre" component={Master}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="hat-wizard" color={color} size={size} />
                    )
                }} />

            <Tab.Screen name="Jogador" component={Player}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" color={color} size={size} />

                    )
                }} />

            <Tab.Screen name="Anuncios" component={Chat} options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="notification" size={size * 1.4} color={color} />
                )
            }} />

            <Tab.Screen name="Sair" component={LogOut} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name='power-off' color={color} size={size} />
                )
            }} />

        </Tab.Navigator>
    );
}

function AppRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Home" component={Tabs}
                options={{ headerShown: false }} />

            <AuthStack.Screen name="SmallMap" component={SmallMap}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Mapas Pequenos'
                }} />

            <AuthStack.Screen name="MediumMap" component={MediumMap}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Mapas Médios'
                }} />

            <AuthStack.Screen name="BigMap" component={BigMap}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Mapas Grandes'
                }} />

            <AuthStack.Screen name="CrowIsland" component={CrowIsland}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Ilha do corvo'
                }} />

            <AuthStack.Screen name="Haum" component={Haum}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Floresta de Haum'
                }} />

            <AuthStack.Screen name="Doughnut" component={Doughnut}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Castelo Doughnut'
                }} />

            <AuthStack.Screen name="MageLabirinty" component={MageLabirinty}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Labirinto do mago'
                }} />

            <AuthStack.Screen name="Noir" component={Noir}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Floresta Noir'
                }} />

            <AuthStack.Screen name="OfStone" component={OfStone}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Floresta das pedras'
                }} />

            <AuthStack.Screen name="Caruaru" component={Caruaru}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Caruaru'
                }} />

            <AuthStack.Screen name="Yamogum" component={Yamogum}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Yamogum'
                }} />

            <AuthStack.Screen name="Monster" component={Monster}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Monstros'
                }} />

            <AuthStack.Screen name="Items" component={Items}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Itens'
                }} />

            <AuthStack.Screen name="MonsterPick" component={MonsterPick}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Nivel dos monstros'
                }} />

            <AuthStack.Screen name="Galeria_Fantasia" component={Galeria_Fantasia}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Seus personagens salvos'
                }} />

            <AuthStack.Screen name="NPC_Fantasia" component={NPC_Fantasia}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Crie um novo personagem'
                }} />

            <AuthStack.Screen name="Dice" component={Dice}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Dados'
                }} />

            <AuthStack.Screen name="Maps" component={Maps}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Mapas'
                }} />

            <AuthStack.Screen name="Magic" component={Magic}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Magias'
                }} />


            <AuthStack.Screen name="Record" component={Record}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Crie uma nova ficha'
                }} />

            <AuthStack.Screen name="RecordGallery" component={RecordGallery}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Fichas'
                }} />


            <AuthStack.Screen name="Armor" component={Armor}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Armaduras'
                }} />


            <AuthStack.Screen name="Equipment" component={Equipment}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Equipamentos'
                }} />


            <AuthStack.Screen name="Weapon" component={Weapon}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Armas'
                }} />

        </AuthStack.Navigator>
    );
}

export default AppRoutes;