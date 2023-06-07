import React, { memo, useEffect } from 'react'

import { Button, View, ViewStyle } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import * as Google from 'expo-auth-session/providers/google'

import { GoogleService } from '@services'
import { NavigationProp } from '@navigation'
import { GOOGLE_ANDROID_ID, GOOGLE_IOS_ID, GOOGLE_WEB_ID } from '@env'

interface GoogleAuthButtonProps {
  style?: ViewStyle
}

export const GoogleAuthButton = memo((props: GoogleAuthButtonProps) => {
  const navigation = useNavigation<NavigationProp>()

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: GOOGLE_ANDROID_ID,
    iosClientId: GOOGLE_IOS_ID,
    webClientId: GOOGLE_WEB_ID,
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

  return <View style={props.style}>
    <Button
      title="Sign in with Google"
      disabled={!request}
      onPress={signIn}
      color="red"
    />
  </View>
})
