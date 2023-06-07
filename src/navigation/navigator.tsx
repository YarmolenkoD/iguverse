import React from 'react'

import { CompositeNavigationProp, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Login, Home } from '@screens'
import { NavigationRef } from '@services'
import { useUser } from '@hooks'

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
  const user = useUser()

  return (
    <NavigationContainer ref={NavigationRef}>
      <Stack.Navigator
        screenOptions={{ header: () => null }}
        initialRouteName="Login"
      >
        {
          user.isAuth
            ? <Stack.Screen name="Home" component={Home} />
            : <Stack.Screen name="Login" component={Login} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
