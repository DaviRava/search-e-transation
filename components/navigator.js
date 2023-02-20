import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Pesquisa from '../screens/search.js';
import Transacao from '../screens/transation.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Aba = createBottomTabNavigator();

export default class Inferior extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Aba.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                var iconName;
                if (route.name === 'TRANSACAO') {
                  iconName = 'book';
                } else if (route.name === 'PESQUISA') {
                  iconName = 'search';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#FFFFFF',
              inactiveTintColor: 'black',
              style: {
                height: 130,
                borderTopWidth: 0,
                backgroundColor: '#5653d4',
              },
              labelStyle: { fontSize: 15, fontFamily: 'ProstoOne_400Regular' },
              labelPosition: 'beside-icon',
              tabStyle: {
                marginTop: 25,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 30,
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#5653d4',
              },
            }}>
            <Aba.Screen name="PESQUISA" component={Pesquisa} />
            <Aba.Screen name="TRANSACAO" component={Transacao} />
          </Aba.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
