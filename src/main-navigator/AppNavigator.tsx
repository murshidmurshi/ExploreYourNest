


import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import type { RootParamList } from '../GlobalTypes';
import OnBoarding from '../screen/onBoarding/OnBoarding';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import Parent from '../screen/Parent';


const Stack = createNativeStackNavigator<RootParamList>();
export default function AppNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />

          {/* User screens */}
          <Stack.Screen name="Parent" component={Parent} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
