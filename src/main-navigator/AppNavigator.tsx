


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Normal from '../screen/Normal';
import Gesture from '../screen/Gesture';


const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Normal" component={Normal} />
          <Stack.Screen name="Gesture" component={Gesture} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({})