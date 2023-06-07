import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native'

export const NavigationRef = createNavigationContainerRef()

export const NavigationService = {
  logout: () => {
    if (NavigationRef.isReady()) {
      NavigationRef.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        }),
      )
    }
  },
}
