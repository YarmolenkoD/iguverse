import { StyleSheet, View, Text } from 'react-native'

export const Home = () => {

  return <View style={styles.container}>
    <Text>HOME</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
