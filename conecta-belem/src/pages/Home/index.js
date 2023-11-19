import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import React, { useState } from 'react';

import BackgroundAcai from '../../assets/background-acai.png';
import BackgroundEstacaoDasDocas from '../../assets/background-estacao-das-docas.png';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Olá, Gabriel!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'left',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    color: '#000000',
    fontWeight: 'bold',
  },
  top: {
    alignItems: 'flex-start',
    paddingBottom: 500,
    marginTop: 0, 
    marginLeft: 40,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 200,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  image: {
    width: 80,
    height: 110,
    marginRight: 16,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menu: {
    borderRadius: 15,
  }
});
