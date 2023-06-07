import React, { memo, useEffect } from 'react'

import { Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import * as Google from 'expo-auth-session/providers/google'

import { GoogleService } from '@services'
import { NavigationProp } from '@navigation'

export const FacebookAuthButton = memo(() => {
  const navigation = useNavigation<NavigationProp>()

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '214155279338-11ffl50ed8n0s5nbabn170dmjss24gde.apps.googleusercontent.com',
    iosClientId: '214155279338-99cabngnu3sul5td933lho2fbs1d54ff.apps.googleusercontent.com',
    webClientId: '214155279338-tegv3n38b495v99240ugop549b1i2t7n.apps.googleusercontent.com',
  })

  useEffect(() => {
    handleSignIn()
  }, [])

  const handleSignIn = async () => {
    console.log(111111144, response)
    if (response?.type === 'success') {
      GoogleService.getUserInfo(response.authentication?.accessToken)
    }
  }

  const signIn = async () => {
    // const res = await promptAsync()

    navigation.navigate('Home')
  }

  return <Button
    title="Sign in with Facebook"
    disabled={!request}
    onPress={signIn}
  />
})
