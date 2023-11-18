import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
      <Image
        source={require("../../assets/background-estacao-das-docas.png")}
      />
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
  },
});
