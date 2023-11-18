import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export function Inicio() {
  const [textColor, setTextColor] = useState('white'); // Estado para controlar a cor do texto

  const teste = () => {
    // Lógica para mudar a cor do texto
    const newColor = textColor === 'white' ? 'black' : 'white'; // Alternando entre as cores
    setTextColor(newColor);
  };
  return (
    <ImageBackground
    source={{ uri: 'https://accetur.com.br/wp-content/uploads/2019/02/belem-1024x576.jpg' }}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>O melhor roteiro para uma viagem inesquecível</Text>
      <TouchableOpacity onPress={teste} style={styles.button}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  );

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
    

}
