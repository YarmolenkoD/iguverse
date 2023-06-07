import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IUser } from '@types'

export interface UserState {
  data: IUser | null
  isAuth: boolean
}

const initialState: UserState = {
  data: null,
  isAuth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUser>) => {
      state.data = action.payload
      state.isAuth = true
    },

    clearAllUserData: (state): any => {
      state.isAuth = false
      state.data = null
    },
  },
})

export const {
  setUserData,
  clearAllUserData
} = userSlice.actions
