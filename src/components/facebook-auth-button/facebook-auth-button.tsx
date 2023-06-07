import React, { memo, useEffect, useState } from 'react'

import { Alert, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import * as Facebook from 'expo-auth-session/providers/facebook'

import { ERROR_MESSAGE } from '@constants'
import { NavigationProp } from '@navigation'
import { FacebookService } from '@services'
import { FACEBOOK_CLIENT_ID } from '@env'
import { Loader } from '@components'

export const FacebookAuthButton = memo(() => {
  const navigation = useNavigation<NavigationProp>()

  const [loading, setLoading] = useState(false)

  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: FACEBOOK_CLIENT_ID,
    scopes: ['public_profile', 'email'],
  }, { useProxy: true })

  useEffect(() => {
    handleSignIn()
  }, [response])

  const handleSignIn = async () => {
    if (response?.type === 'success' && response?.authentication?.accessToken) {
      setLoading(true)

      await FacebookService.getUserInfo(response.authentication?.accessToken)

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
    <Button
      title="Sign in with Facebook"
      disabled={!request}
      onPress={signIn}
    />
    <Loader />
  </>
})
