// Detalhes.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function DetalhesAtividade ({ route }) {
  const { Nome } = route.params;
  const { Foto } = route.params;
  const { Descricao } = route.params;

  return (
    <View style={styles.container}>
      <Image source={Foto} style={styles.image} />
      <Text style={styles.title}>{Nome}</Text>
      <Text style={styles.description}>{Descricao}</Text>
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
  image: {
    width: 100, // Ajuste a largura conforme necessário
    height: 100, // Ajuste a altura conforme necessário
    borderRadius: 50,
  }
  // Adicione estilos adicionais conforme necessário
});


