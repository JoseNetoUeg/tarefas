import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import tarefa from './src/pages/Tarefa';
import novaTarefa from './src/pages/Novatarefa';
import detalhes from './src/pages/Detalhes';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tarefa">

        <Stack.Screen
          name="Tarefa"
          component={tarefa}
          options={{
            headerTintColor: "#F92E5A",
          }}
        />


        <Stack.Screen
          name="NovaTarefa"
          component={novaTarefa}
          options={{
            headerTintColor: "#F92E5A",
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={detalhes}
          options={{
            headerTintColor: "#F92E5A",
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>

  );
}


