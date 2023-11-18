import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export function Inicio() {
  const navigation = useNavigation();

  return (
    <ImageBackground
    source={{ uri: 'https://accetur.com.br/wp-content/uploads/2019/02/belem-1024x576.jpg' }}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <Text style={[styles.text, { color: "white" }]}>O melhor roteiro para uma viagem inesquecível</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  );
}

  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      // outras estilizações conforme necessário
    },
    container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 44,
      fontWeight: 'bold',
      color: 'white',
      width: 350,
      textAlign: 'center',
      // outras estilizações conforme necessário
    },
    button: {
      backgroundColor: '#028043',
      paddingVertical: 20,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginTop: 50,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
  });
