import { StyleSheet, View, Text, Image, Button } from 'react-native'

import { useUser } from '@hooks'
import { Loader } from '@components'

export const Home = () => {
  const user = useUser()

  if (user) {
    return <View style={styles.container}>
      <Image source={{ uri: user.picture }} style={styles.avatar} />
      {user.name && <Text style={styles.text}>{user.name}</Text>}
      {user.email && <Text style={styles.text}>Email: {user.email}</Text>}
      <Button title="Logout" onPress={user.logout} />
    </View>
  }

  return <Loader />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 12,
    fontSize: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 12,
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#7a7a7a'
  }
})
