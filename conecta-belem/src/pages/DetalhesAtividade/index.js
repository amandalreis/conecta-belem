// Detalhes.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function DetalhesAtividade ({ route }) {
  const { itemId } = route.params;

  // Lógica para buscar detalhes do item com base no itemId

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Item {itemId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Adicione estilos adicionais conforme necessário
});


