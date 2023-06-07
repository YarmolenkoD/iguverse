import { Alert } from 'react-native'

import { setUserData, store } from '@redux-store'
import { ERROR_MESSAGE } from '@constants'
import { IUser } from '@types'

const formatResponse = (response: any): IUser => {
  return {
    id: response.id,
    name: response.name,
    email: response.email ?? null,
    picture: response?.picture?.data?.url ?? null,
  }
}

export const FacebookService = {
  async getUserInfo (token = '') {
    if (!token) return

    try {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      const result = await response.json()

      store.dispatch(setUserData(formatResponse(result)))

      return result
    } catch (error) {
      Alert.alert(ERROR_MESSAGE)
      return null
    }
  }
}
