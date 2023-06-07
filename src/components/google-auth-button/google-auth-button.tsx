import React, { memo, useEffect, useState } from 'react'

import { Alert, Button, View, ViewStyle } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import * as Google from 'expo-auth-session/providers/google'

import { ERROR_MESSAGE } from '@constants'
import { GoogleService } from '@services'
import { NavigationProp } from '@navigation'
import { GOOGLE_ANDROID_ID, GOOGLE_IOS_ID, GOOGLE_WEB_ID } from '@env'
import { Loader } from '@components'

interface GoogleAuthButtonProps {
  style?: ViewStyle
}

export const GoogleAuthButton = memo((props: GoogleAuthButtonProps) => {
  const navigation = useNavigation<NavigationProp>()

  const [loading, setLoading] = useState(false)

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: GOOGLE_ANDROID_ID,
    iosClientId: GOOGLE_IOS_ID,
    webClientId: GOOGLE_WEB_ID,
  })

  useEffect(() => {
    handleSignIn()
  }, [response])

  const handleSignIn = async () => {
    if (response?.type === 'success' && response?.authentication?.accessToken) {
      setLoading(true)

      await GoogleService.getUserInfo(response.authentication?.accessToken)

      setLoading(false)

      // navigation.navigate('Home')
    } else if (response) {
      Alert.alert(ERROR_MESSAGE)
    }
  }

  const signIn = async () => {
    const result = await promptAsync()

    if (result.type !== 'success') {
      Alert.alert(ERROR_MESSAGE)
    }
  }

  return <>
    <View style={props.style}>
      <Button
        title="Sign in with Google"
        disabled={!request}
        onPress={signIn}
        color="red"
      />
    </View>
    <Loader show={loading} />
  </>
})
