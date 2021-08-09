import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Chat from "../pages/Chat";
import LogOut from '../pages/LogOut';
import Maps from '../pages/Maps';

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#000',
                },
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#000',
                activeBackgroundColor: '#fff',
                inactiveTintColor: '#fff',
            }}>
            <Tab.Screen name="Maps" component={Maps}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name='chess-rook' color={color} size={size} />
                    )
                }} />
            <Tab.Screen name="Chat" component={Chat} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name='dice-d20' color={color} size={size} />
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
            <AuthStack.Screen name="Maps" component={Maps}
                options={{
                    headerStyle: {
                        backgroundColor: '#373737',
                        borderBottomWidth: 0.25,
                        borderBottomColor: '#fff'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Mapas'
                }} />

        </AuthStack.Navigator>
    );
}

export default AppRoutes;