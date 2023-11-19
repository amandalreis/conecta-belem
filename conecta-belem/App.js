import { Routes, MainStack } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Sending']);

export default function App() {
  return (
    
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
  )
}

