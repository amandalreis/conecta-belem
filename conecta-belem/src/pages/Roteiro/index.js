import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export function Roteiro() {
  const navigation = useNavigation();
  const countries = ["21 de Dezembro", "22 de Dezembro", "23 de Dezembro", "24 de Dezembro"]
  const [selectedItem, setSelectedItem] = useState(countries[0]); // Define o primeiro item como selecionado inicialmente
  const dataList = [
    {
      id: '1',
      image: require('../../assets/basilica.jpeg'), 
      title: '08:00 - Basílica Nossa Senhora de Nazaré',
      descricao_atividade: 'Lorem Ipsum',
      screen: require('../../assets/roteiro-basilica.png'),
    },
    {
      id: '2',
      image: require('../../assets/uber.png'), 
      title: '09:00 - Uber Agendado',
      uber: 'Motorista: Wesley Souza',
      descricao_atividade: 'Lorem Ipsum',
      screen: require('../../assets/roteiro-uber-wesley.png'),
    },
    {
      id: '3',
      image: require('../../assets/ver-o-peso.jpg'), 
      title: '09:30 - Ver-o-Peso',
      descricao_atividade: 'Lorem Ipsum',
      screen: require('../../assets/roteiro-ver-o-peso.png'),
    },
    {
      id: '4',
      image: require('../../assets/uber.png'), 
      title: '11:30 - Uber Agendado',
      uber: 'Motorista: Samuel Novaes',
      descricao_atividade: 'Lorem Ipsum',
      screen: require('../../assets/roteiro-uber-samuel.png'),
    },
    {
      id: '5',
      image: require('../../assets/logo-casa-saulo.jpg'), 
      title: '12:00 - Casa do Saulo Onze Janelas',
      descricao_atividade: 'Lorem Ipsum',
      screen: require('../../assets/roteiro-casa-saulo.png'),
    },
    // Adicione mais itens conforme necessário
  ];
  

  const headerRoteiro = <View style={styles.top}>
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
    dropdownTextStyle={{ color: 'white' }}
  />
  </View>
  

  return (
    <View style={styles.container}>
      <View style={styles.list}>
      <FlatList
          ListHeaderComponent={headerRoteiro}
          data={dataList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("DetalhesAtividade", { Screen: item.screen })}>
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.uber}</Text>
              </View>
            </View>
            </TouchableOpacity>
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
    color: 'f0f',
  },
  list: {
    marginHorizontal: 30,
  },
  description: {
    fontSize: 14,
    fontWeight: 'regular',
  }
});
