


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Normal from '../screen/Normal';
import Gesture from '../screen/Gesture';
import type{RootParamList} from '../GlobalTypes';
import Scroll from '../screen/Scroll';


const Stack = createNativeStackNavigator<RootParamList>();
export default function AppNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Normal" component={Normal} />
          <Stack.Screen name="Gesture" component={Gesture} />
          <Stack.Screen name="Scroll" component={Scroll} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({})