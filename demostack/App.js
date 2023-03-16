import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={PageA} options={{headerShown: true}}/>
        <Stack.Screen name="About" component={PageB} options={{title: "le titre de ma page B"}} />
        <Stack.Screen name="Contact" component={PageC} options={{title: "Contacts"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Container: {

    flex: 1,
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#C9C5CB',
   
    
  },
});
