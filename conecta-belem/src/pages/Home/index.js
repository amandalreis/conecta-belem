import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export function Home() {
  const navigation = useNavigation();
  const countries = ["21 de Dezembro", "22 de Dezembro", "23 de Dezembro", "24 de Dezembro"]
  const [selectedItem, setSelectedItem] = useState(countries[0]); // Define o primeiro item como selecionado inicialmente
  const dataList = [
    {
      id: '1',
      image: require('../../assets/logo-point-do-açai.png'), 
      title: 'Point do Açaí',
      status: 'Aberto até às 22:00',
      descricao_atividade: 'No Restaurante Point do Açaí, você encontra pratos típicos da região amazônica, como gó, pratiqueira, charque e camarão, acompanhados de açaí preto, branco ou bacaba. A cozinha segue altos padrões de higiene e qualidade, representando fielmente a culinária paraense.',
      screen: require('../../assets/atv-point-do-acai.png'),
    },
    {
      id: '2',
      image: require('../../assets/logo-casa-saulo.jpg'), 
      title: 'Casa do Saulo Onze Janelas',
      status: 'Fechado',
      descricao_atividade: 'Uma experiência amazônica no Guajará.',
      screen: require('../../assets/atv-casa-do-saulo.png'),
    },
    {
      id: '3',
      image: require('../../assets/roxy-bar.png'), 
      title: 'Roxy Bar',
      status: 'Aberto até 00:00',
      descricao_atividade: 'O prazer de estar lá.',
      screen: require('../../assets/atv-roxy-bar.png'),
    },
    {
      id: '4',
      image: require('../../assets/remanso-do-peixe.jpg'), 
      title: 'Remanso do Peixe',
      status: 'Aberto até 23:00',
      descricao_atividade: 'Ensopados de peixe generosos, pratos com arroz e peixes fritos em um espaço simples com mobília colorida.',
      screen: require('../../assets/atv-remanso-do-peixe.png'),
    },
    
    // Adicione mais itens conforme necessário
  ];

  const headerHome = <View style={styles.top}>
  <Text style={styles.text}>Olá, Gabriel!</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll_view}>
  <View style={styles.row}>
  <Text style={styles.description_underline}>Restaurantes</Text>
  <Text style={styles.description}>Lojas</Text>
  <Text style={styles.description}>Excursões</Text>
  <Text style={styles.description}>Hotéis</Text>
  <Text style={styles.description}>Pontos Turísticos</Text>
  </View>
  </ScrollView>
  </View>
  

  return (
    <View style={styles.container}>
      <View style={styles.list}>
      <FlatList
          ListHeaderComponent={headerHome}
          data={dataList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("DetalhesAtividade", { Screen: item.screen })}>
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.status}>{item.status}</Text>
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
  },
  list: {
    marginHorizontal: 30,
  },
  status: {
    fontSize: 14,
    fontWeight: 'regular',
  },
  description_underline: {
    fontSize: 17,
    fontWeight: 'regular',
    marginTop: 10,
    textDecorationLine: 'underline', // Adiciona sublinhado
    color: 'green',
    marginHorizontal: 5,
  },
  description: {
    fontSize: 17,
    fontWeight: 'regular',
    marginTop: 10,
    marginHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
  },
  scroll_view: {
    marginRight: -40,
  }
});
