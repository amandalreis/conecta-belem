// Detalhes.js
import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function DetalhesAtividade ({ route }) {
  const { Screen } = route.params;

  return (
    <ImageBackground
    source={(Screen)}
    style={styles.backgroundImage}>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    // outras estilizações conforme necessário
  },
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
  },
  description: {
    fontSize: 17,
    fontWeight: 'regular',
    marginHorizontal: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }
  // Adicione estilos adicionais conforme necessário
});


