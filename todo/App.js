import React from 'react';
import Counter from './src/Counter';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';

export {firestore};

export default function App(props) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Todos"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Todos" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
