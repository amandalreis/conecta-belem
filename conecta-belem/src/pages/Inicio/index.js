import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export function Inicio() {
  const navigation = useNavigation();

  return (
    <ImageBackground
    source={require('../../assets/background-estacao-das-docas.png')}
    style={styles.backgroundImage}
    >

    <View style={styles.container}>
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
      resizeMode: 'contain',
      // outras estilizações conforme necessário
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#028043',
      paddingVertical: 20,
      paddingHorizontal: 30,
      borderRadius: 8,
      marginTop: 450,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'regular',
    },
  });
