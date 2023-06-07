import { StyleSheet, View } from 'react-native'

import { FacebookAuthButton, GoogleAuthButton } from '@components'

export const Login = () => {

  return <View style={styles.container}>
      <GoogleAuthButton style={{ marginBottom: 14 }} />
      <FacebookAuthButton />
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
