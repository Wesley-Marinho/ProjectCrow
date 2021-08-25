import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Chat from "../pages/Chat";
import LogOut from '../pages/LogOut';
import BigMap from '../pages/MapList/BigMap';
import MediumMap from '../pages/MapList/MediumMap';
import SmallMap from '../pages/MapList/SmallMap';
import Maps from '../pages/Maps';
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
                        <FontAwesome5 name='map-signs' color={color} size={size} />
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


        </AuthStack.Navigator>
    );
}

export default AppRoutes;