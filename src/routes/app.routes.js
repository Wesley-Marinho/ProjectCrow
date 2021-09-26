import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Chat from "../pages/Chat";
import Dice from '../pages/Dice';
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
import Monster from '../pages/Monsters';
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
                activeTintColor: '#ffffff',
                activeBackgroundColor: '#000000',
                inactiveTintColor: '#ffffff',
            }}>
            <Tab.Screen name="Maps" component={Maps}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name='map' color={color} size={size} />
                    )
                }} />
            <Tab.Screen name="Chat" component={Chat} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name='comment-dots' style='solid' color={color} size={size} />
                )
            }} />

            <Tab.Screen name="LogOut" component={LogOut} options={{
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
                    headerTitle: 'Crow Island'
                }} />

            <AuthStack.Screen name="Haum" component={Haum}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Haum'
                }} />

            <AuthStack.Screen name="Doughnut" component={Doughnut}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Doughnut'
                }} />

            <AuthStack.Screen name="MageLabirinty" component={MageLabirinty}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'MageLabirinty'
                }} />

            <AuthStack.Screen name="Noir" component={Noir}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Noir'
                }} />

            <AuthStack.Screen name="OfStone" component={OfStone}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'OfStone'
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

            <AuthStack.Screen name="Dice" component={Dice}
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#000000',
                    },
                    headerTintColor: '#000000',
                    headerTitle: 'Dice'
                }} />

        </AuthStack.Navigator>
    );
}

export default AppRoutes;