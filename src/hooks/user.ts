import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-native'

import { createSelector } from '@reduxjs/toolkit'
import { IUser } from '@types'
import { clearAllUserData, store } from '@redux-store'
import { NavigationService } from '@services'

const selectSelf = (state: any) => state?.user
const userSelector = createSelector(selectSelf, state => state?.data)
const isAuthSelector = createSelector(selectSelf, state => state?.data)

export interface IUseUser extends IUser {
  isAuth: boolean
  logout: () => void
}

export const useUser = (): IUseUser => {
  const user = useSelector(userSelector)
  const isAuth = useSelector(isAuthSelector)

  const logout = useCallback(() => {
    Alert.alert('Logout', 'Are you sure you want to Logout?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          store.dispatch(clearAllUserData())

          NavigationService.logout()
        },
      },
    ])
  }, [])

  return {
    ...(user || {}),
    isAuth,
    logout
  }
}
