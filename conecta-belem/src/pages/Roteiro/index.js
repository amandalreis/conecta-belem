import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import React, { useState } from 'react';

import BackgroundAcai from '../../assets/background-acai.png';
import BackgroundEstacaoDasDocas from '../../assets/background-estacao-das-docas.png';

export function Roteiro() {
  const dataList = [
    {
      id: '1',
      image: require('../../assets/background-acai.png'), 
      description: '08:00',
    },
    {
      id: '2',
      image: require('../../assets/background-estacao-das-docas.png'), 
      description: '10:00',
    },
    // Adicione mais itens conforme necessário
  ];
  const countries = ["21 de Dezembro", "22 de Dezembro", "23 de Dezembro", "24 de Dezembro"]
  const [selectedItem, setSelectedItem] = useState(countries[0]); // Define o primeiro item como selecionado inicialmente

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Planejamento</Text>
        <SelectDropdown
          style={styles.menu}
          data={countries}
          onSelect={(selectedItem, index) => {
            setSelectedItem(selectedItem); // Atualiza o estado com o item selecionado
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem; // Retorna o texto do item selecionado no botão
          }}
          rowTextForSelection={(item, index) => {
            return item; // Define o texto exibido para cada item na lista suspensa
          }}
          defaultButtonText={selectedItem} // Define o texto do botão com o item selecionado
        />
        <FlatList
          data={dataList}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE6CD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    color: '#000000',
    fontWeight: 'bold',
  },
  top: {
    alignItems: 'flex-start',
    paddingBottom: 20,
    marginTop: 50, 
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
