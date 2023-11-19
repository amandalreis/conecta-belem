import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import React, { useState } from 'react';

export function Roteiro() {
  const countries = ["21 de Dezembro", "22 de Dezembro", "23 de Dezembro", "24 de Dezembro"]
  const [selectedItem, setSelectedItem] = useState(countries[0]); // Define o primeiro item como selecionado inicialmente

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Planejamento</Text>
        <SelectDropdown
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
    paddingBottom: 550,
    paddingRight: 70,
    marginTop: 50, 
  },
});
