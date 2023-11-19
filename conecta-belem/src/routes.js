import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from './pages/Inicio'
import { Home } from './pages/Home'
import { Roteiro } from './pages/Roteiro'
import { DetalhesAtividade } from './pages/DetalhesAtividade'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function MainStack() {
    return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Routes} options={{ headerShown: false }}/>
    </Stack.Navigator>
    )
  }

  export function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="DetalhesAtividade" component={DetalhesAtividade} options={{ headerShown: false }}/>
    </Stack.Navigator>
    )
  }

  export function RoteiroStack() {
    return (
        <Stack.Navigator initialRouteName="Roteiro">
      <Stack.Screen
        name="Roteiro"
        component={Roteiro}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="DetalhesAtividade" component={DetalhesAtividade} options={{ headerShown: false }}/>
    </Stack.Navigator>
    )
  }

export function Routes() {
    return(
        <Tab.Navigator initialRouteName="home">
            <Tab.Screen
                name="home"
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused) {
                            return <Ionicons size={size} color="green" name="home"/>
                        }

                        return <Ionicons size={size} color={color} name="home-outline"/>
                    }
                }}
            />
            <Tab.Screen
                name="roteiro"
                component={RoteiroStack}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused) {
                            return <Ionicons size={size} color="green" name="calendar"/>
                        }

                        return <Ionicons size={size} color={color} name="calendar-outline"/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}