import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaDeProdutos from './Components/ListaDeProdutos';
import AdicionarProduto from './Components/AdicionarProduto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaDeProdutos">
        <Stack.Screen name="ListaDeProdutos" component={ListaDeProdutos}/>
        <Stack.Screen name="AdicionarProduto" component={AdicionarProduto}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
