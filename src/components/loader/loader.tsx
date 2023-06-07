import { memo } from 'react'

import { ActivityIndicator, StyleSheet, View } from 'react-native'

interface LoaderProps {
  show?: boolean
}

export const Loader = memo((props: LoaderProps) => {
  const { show } = props

  if (show) {
    return <View style={styles.container}>
      <ActivityIndicator size="large"/>
    </View>
  }

  return null
})

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
