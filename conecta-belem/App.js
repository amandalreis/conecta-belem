import { Routes, MainStack } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
  )
}

