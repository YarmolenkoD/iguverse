import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'

import { storage } from './config'

import {
  userSlice,
} from './reducers'

export const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth', 'schedule', 'results', 'notifications'],
}

const middleware = getDefaultMiddleware({
  immutableCheck: true,
  serializableCheck: false,
})

const reducers = combineReducers({
  user: userSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export type RootState = ReturnType<typeof persistedReducer>

export const store = configureStore({
  middleware,
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
