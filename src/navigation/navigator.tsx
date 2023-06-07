import React from 'react'

import { CompositeNavigationProp, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Login, Home } from '@screens'

export type INavigator = {
  Login: undefined
  Home: undefined
}

export type NavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<INavigator>,
  NativeStackNavigationProp<INavigator>
>

export const Stack = createNativeStackNavigator<INavigator>()

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: () => null }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
