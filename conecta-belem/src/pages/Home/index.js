import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import React, { useState } from 'react';

import BackgroundAcai from '../../assets/background-acai.png';
import BackgroundEstacaoDasDocas from '../../assets/background-estacao-das-docas.png';

export function Home() {
  const countries = ["21 de Dezembro", "22 de Dezembro", "23 de Dezembro", "24 de Dezembro"]
  const [selectedItem, setSelectedItem] = useState(countries[0]); // Define o primeiro item como selecionado inicialmente
  const dataList = [
    {
      id: '1',
      image: require('../../assets/logo-point-do-açai.png'), 
      title: 'Point do Açaí',
    },
    {
      id: '2',
      image: require('../../assets/logo-casa-saulo.jpg'), 
      title: 'Casa do Saulo Onze Janelas',
    },
    {
      id: '3',
      image: require('../../assets/roxy-bar.png'), 
      title: 'Roxy Bar',
    }
    
    // Adicione mais itens conforme necessário
  ];

  const headerHome = <View style={styles.top}>
  <Text style={styles.text}>Olá, Gabriel!</Text>
  </View>
  

  return (
    <View style={styles.container}>
      <View style={styles.list}>
      <FlatList
          ListHeaderComponent={headerHome}
          data={dataList}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
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
    backgroundColor: '#F1F1F1',
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
    marginTop: 110,
    marginRight: 80,
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menu: {
    borderRadius: 15,
  },
  list: {
    marginHorizontal: 30,
  },
});
