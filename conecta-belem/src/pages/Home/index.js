import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOla}>Olá!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE6CD',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 40, // Espaço para o texto não ficar muito próximo da borda superior
    paddingHorizontal: 20, // Espaço nas laterais para evitar que o texto fique colado nas bordas
  },
  textOla: {
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});